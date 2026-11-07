import type { VercelRequest, VercelResponse } from '@vercel/node';
import { extractAuthToken, validateCsrf } from './cookies';
import { verifyAccessToken, TokenClaims } from './jwt';
import { getRedisSession, RedisSessionData } from './redis';

export interface AuthenticatedContext {
  userId: string;
  sessionId: string;
  jwtId: string;
  email?: string;
  role?: string;
  session: RedisSessionData;
  claims: TokenClaims;
}

export type AuthResult =
  | { success: true; context: AuthenticatedContext }
  | { success: false; status: number; error: string; code: string };

/**
 * Enterprise Authentication Middleware for Vercel Serverless Functions.
 * Validates:
 * 1. CSRF protection on mutating methods.
 * 2. Token presence from HttpOnly cookie or Authorization header.
 * 3. Cryptographic JWT signature, algorithm (HS256), issuer, audience, and expiration via jose.
 * 4. Active live session existence in Redis Cloud under `session:<session_id>`.
 * 5. Redis session status must be ACTIVE (rejects REVOKED and EXPIRED).
 * 6. Redis user_id matches JWT sub.
 * 7. Redis session_id matches JWT sid.
 * 8. Redis jwt_jti matches JWT jti.
 */
export async function authenticateRequest(req: VercelRequest): Promise<AuthResult> {
  // 1. CSRF Verification
  if (!validateCsrf(req)) {
    return {
      success: false,
      status: 403,
      code: 'CSRF_VALIDATION_FAILED',
      error: 'Invalid or missing CSRF token'
    };
  }

  // 2. Read Authentication Token
  const token = extractAuthToken(req);
  if (!token) {
    return {
      success: false,
      status: 401,
      code: 'AUTH_TOKEN_MISSING',
      error: 'Authentication required. No session token provided.'
    };
  }

  // 3. Cryptographic JWT Verification (jose)
  let claims: TokenClaims;
  try {
    claims = await verifyAccessToken(token);
  } catch (jwtErr: any) {
    const isExpired = jwtErr.code === 'ERR_JWT_EXPIRED' || (jwtErr.message && jwtErr.message.includes('expired'));
    return {
      success: false,
      status: 401,
      code: isExpired ? 'TOKEN_EXPIRED' : 'TOKEN_INVALID',
      error: isExpired ? 'Authentication token has expired. Please log in again.' : 'Invalid authentication token.'
    };
  }

  const { sub: userId, sid: sessionId, jti: jwtId } = claims;

  // 4. Retrieve live session from Redis Cloud
  let redisSession: RedisSessionData | null = null;
  try {
    redisSession = await getRedisSession(sessionId);
  } catch (redisErr: any) {
    console.error('[Auth Middleware] Redis session lookup failed:', redisErr.message || redisErr);
    return {
      success: false,
      status: 503,
      code: 'SESSION_STORE_UNAVAILABLE',
      error: 'Session verification service temporarily unavailable.'
    };
  }

  // 5. Verify Session Exists
  if (!redisSession) {
    return {
      success: false,
      status: 401,
      code: 'SESSION_NOT_FOUND',
      error: 'Session does not exist or has expired.'
    };
  }

  // 6. Verify Session Status is ACTIVE
  if (redisSession.status !== 'ACTIVE') {
    return {
      success: false,
      status: 401,
      code: redisSession.status === 'REVOKED' ? 'SESSION_REVOKED' : 'SESSION_INACTIVE',
      error: `Session is no longer valid (${redisSession.status.toLowerCase()}).`
    };
  }

  // 7. Verify Redis User ID matches JWT Subject
  if (redisSession.user_id !== userId) {
    return {
      success: false,
      status: 401,
      code: 'USER_MISMATCH',
      error: 'Security violation: Token subject does not match session owner.'
    };
  }

  // 8. Verify Redis Session ID matches JWT Session ID
  if (redisSession.session_id !== sessionId) {
    return {
      success: false,
      status: 401,
      code: 'SESSION_MISMATCH',
      error: 'Security violation: Token session does not match stored session.'
    };
  }

  // 9. Verify Redis JWT JTI matches JWT ID
  if (redisSession.jwt_jti !== jwtId) {
    return {
      success: false,
      status: 401,
      code: 'JWT_ID_MISMATCH',
      error: 'Security violation: Token identifier does not match active session token.'
    };
  }

  // 10. Check Session Timestamp Expiration
  const expiresAtMs = new Date(redisSession.expires_at).getTime();
  if (Date.now() > expiresAtMs) {
    return {
      success: false,
      status: 401,
      code: 'SESSION_EXPIRED',
      error: 'Session has exceeded its maximum lifetime.'
    };
  }

  return {
    success: true,
    context: {
      userId,
      sessionId,
      jwtId,
      email: claims.email,
      role: claims.role,
      session: redisSession,
      claims
    }
  };
}

/**
 * Helper to wrap protected Vercel serverless handlers.
 */
export function withAuth(
  handler: (req: VercelRequest, res: VercelResponse, auth: AuthenticatedContext) => Promise<any>
) {
  return async (req: VercelRequest, res: VercelResponse) => {
    const authResult = await authenticateRequest(req);
    if (!authResult.success) {
      return res.status(authResult.status).json({
        error: authResult.error,
        code: authResult.code
      });
    }

    return handler(req, res, authResult.context);
  };
}

