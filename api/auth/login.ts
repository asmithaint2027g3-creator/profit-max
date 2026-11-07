import type { VercelRequest, VercelResponse } from '@vercel/node';
import { v4 as uuidv4 } from 'uuid';
import { generateSessionId } from '../_lib/session-id';
import { createRedisSession, revokeRedisSession } from '../_lib/redis';
import { logSessionToGoogleSheets } from '../_lib/google-sheets-sessions';
import { signAccessToken } from '../_lib/jwt';
import { setAuthCookies } from '../_lib/cookies';
import { checkRateLimit } from '../_lib/rate-limiter';

const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days session lifetime in Redis

async function verifyCredentialsWithVault(identifier: string, password: string): Promise<any> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    throw new Error('Authentication backend configuration missing (GOOGLE_SCRIPT_URL).');
  }

  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      action: 'verify_login',
      identifier: identifier.trim(),
      password: password
    })
  });

  const result = await response.json();
  return result;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { identifier, password } = req.body || {};

  // 1. Validate required fields
  if (!identifier || typeof identifier !== 'string' || !password || typeof password !== 'string') {
    return res.status(400).json({
      error: 'User ID or Business Email and Password are required.',
      code: 'INVALID_PAYLOAD'
    });
  }

  const cleanIdentifier = identifier.trim();
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

  // 2. Rate limiting check (max 5 login attempts per minute per IP / Identifier)
  const rateCheck = await checkRateLimit(`login:${clientIp}:${cleanIdentifier}`, 5, 60);
  if (!rateCheck.allowed) {
    return res.status(429).json({
      error: `Too many login attempts. Please wait ${rateCheck.resetSeconds} seconds before trying again.`,
      code: 'RATE_LIMIT_EXCEEDED'
    });
  }

  // 3. Verify credentials against backend vault
  let authResult: any;
  try {
    authResult = await verifyCredentialsWithVault(cleanIdentifier, password);
  } catch (vaultErr: any) {
    console.error('[Login] Credential verification failure:', vaultErr.message || vaultErr);
    return res.status(500).json({
      error: 'Authentication service temporarily unavailable.',
      code: 'VAULT_ERROR'
    });
  }

  if (!authResult || authResult.status !== 'success' || !authResult.user) {
    return res.status(401).json({
      error: authResult?.message || 'Invalid credentials. Please verify your User ID/Email and Password.',
      code: authResult?.code || 'INVALID_CREDENTIALS'
    });
  }

  const user = authResult.user;
  const now = new Date();
  const loginTime = now.toISOString();
  const expiresAt = new Date(now.getTime() + SESSION_TTL_SECONDS * 1000).toISOString();

  // 4. Generate unique cryptographically secure Session ID and JWT JTI
  const sessionId = generateSessionId();
  const jwtId = uuidv4();

  // 5. Store active session in Redis Cloud (session:<session_id>)
  try {
    await createRedisSession(
      {
        session_id: sessionId,
        user_id: user.userId,
        jwt_jti: jwtId,
        status: 'ACTIVE',
        created_at: loginTime,
        expires_at: expiresAt,
        last_active: loginTime,
        user_email: user.email,
        ip_address: clientIp,
        user_agent: req.headers['user-agent']
      },
      SESSION_TTL_SECONDS
    );
  } catch (redisErr: any) {
    console.error('[Login] Redis session creation failed:', redisErr.message || redisErr);
    return res.status(503).json({
      error: 'Session storage service temporarily unavailable. Please try again.',
      code: 'REDIS_SESSION_FAILURE'
    });
  }

  // 6. Record exact same Session ID to Google Sheets 'Session_Logs' tab
  try {
    await logSessionToGoogleSheets({
      sessionId,
      userId: user.userId,
      jwtId,
      loginTime,
      expiresAt,
      lastActive: loginTime,
      status: 'ACTIVE'
    });
  } catch (sheetsErr: any) {
    // Audit failure reconciliation:
    // If Redis succeeded but Sheets logging failed, revoke Redis session immediately to avoid un-audited access
    console.error('[Login] Google Sheets audit logging failed. Rolling back Redis session:', sheetsErr.message || sheetsErr);
    try {
      await revokeRedisSession(sessionId);
    } catch {}

    return res.status(500).json({
      error: 'Failed to record mandatory security session audit log. Session creation aborted.',
      code: 'SHEETS_AUDIT_FAILURE'
    });
  }

  // 7. Generate Signed JWT with claims: sub = User ID, sid = Session ID, jti = JWT ID
  let accessToken: string;
  try {
    accessToken = await signAccessToken({
      userId: user.userId,
      sessionId,
      jti: jwtId,
      email: user.email,
      role: 'user'
    });
  } catch (jwtErr: any) {
    console.error('[Login] JWT signing failed:', jwtErr.message || jwtErr);
    try {
      await revokeRedisSession(sessionId);
    } catch {}

    return res.status(500).json({
      error: 'Token issuance failed.',
      code: 'JWT_SIGN_FAILURE'
    });
  }

  // 8. Set HttpOnly, Secure, SameSite Cookie + CSRF Double-Submit Cookie
  setAuthCookies(res, accessToken, SESSION_TTL_SECONDS);

  // 9. Return minimal user profile without exposing token or secrets
  return res.status(200).json({
    success: true,
    user: {
      userId: user.userId,
      email: user.email,
      fullName: user.fullName,
      company: user.company,
      country: user.country,
      industry: user.industry,
      accountStatus: user.accountStatus || 'Active'
    }
  });
}

