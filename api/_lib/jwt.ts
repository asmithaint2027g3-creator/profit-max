import { SignJWT, jwtVerify, JWTPayload } from 'jose';

export interface TokenClaims extends JWTPayload {
  sub: string;     // User ID
  sid: string;     // Session ID
  jti: string;     // JWT ID (unique per token)
  email?: string;
  role?: string;
}

const DEFAULT_ACCESS_TTL_SECONDS = 15 * 60; // 15 minutes
const DEFAULT_ISSUER = 'profitmachines-auth';
const DEFAULT_AUDIENCE = 'profitmachines-client';

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET configuration is missing. Please configure a 256-bit or longer signing secret in environment variables.');
  }
  if (secret.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters long for cryptographic security.');
  }
  return new TextEncoder().encode(secret);
}

export function getJwtIssuer(): string {
  return process.env.JWT_ISSUER || DEFAULT_ISSUER;
}

export function getJwtAudience(): string {
  return process.env.JWT_AUDIENCE || DEFAULT_AUDIENCE;
}

export function getJwtAccessTtlSeconds(): number {
  const envVal = process.env.JWT_ACCESS_TTL_SECONDS;
  if (envVal) {
    const parsed = parseInt(envVal, 10);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  return DEFAULT_ACCESS_TTL_SECONDS;
}

/**
 * Generates a cryptographically signed Access JWT using the jose library.
 * The sid claim matches the exact Session ID generated for Redis Cloud and Google Sheets.
 */
export async function signAccessToken(params: {
  userId: string;
  sessionId: string;
  jti: string;
  email?: string;
  role?: string;
  customTtlSeconds?: number;
}): Promise<string> {
  const secretKey = getJwtSecret();
  const issuer = getJwtIssuer();
  const audience = getJwtAudience();
  const ttl = params.customTtlSeconds || getJwtAccessTtlSeconds();

  const now = Math.floor(Date.now() / 1000);
  const exp = now + ttl;

  return await new SignJWT({
    sid: params.sessionId,
    email: params.email,
    role: params.role || 'user'
  })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setSubject(params.userId)
    .setJti(params.jti)
    .setIssuedAt(now)
    .setExpirationTime(exp)
    .setIssuer(issuer)
    .setAudience(audience)
    .sign(secretKey);
}

/**
 * Strictly verifies the JWT signature, algorithm, issuer, audience, and expiration.
 * Rejects invalid, tampered, or expired tokens.
 */
export async function verifyAccessToken(token: string): Promise<TokenClaims> {
  if (!token || typeof token !== 'string') {
    throw new Error('Missing token');
  }

  const secretKey = getJwtSecret();
  const issuer = getJwtIssuer();
  const audience = getJwtAudience();

  const { payload } = await jwtVerify(token, secretKey, {
    issuer,
    audience,
    algorithms: ['HS256']
  });

  if (!payload.sub || !payload['sid'] || !payload.jti) {
    throw new Error('Token payload missing mandatory claims (sub, sid, jti)');
  }

  return payload as TokenClaims;
}
