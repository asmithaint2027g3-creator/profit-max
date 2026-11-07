import crypto from 'crypto';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export const AUTH_COOKIE_NAME = 'pm_auth_token';
export const CSRF_COOKIE_NAME = 'pm_csrf_token';

const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

export interface CookieSerializeOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'lax' | 'strict' | 'none';
  path?: string;
  maxAge?: number;
  expires?: Date;
}

/**
 * Standard cookie serialization meeting RFC 6265 specifications.
 */
export function serializeCookie(name: string, val: string, options: CookieSerializeOptions = {}): string {
  let str = `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
  if (options.maxAge !== undefined) {
    str += `; Max-Age=${Math.floor(options.maxAge)}`;
  }
  if (options.expires) {
    str += `; Expires=${options.expires.toUTCString()}`;
  }
  if (options.path) {
    str += `; Path=${options.path}`;
  }
  if (options.sameSite) {
    str += `; SameSite=${options.sameSite.charAt(0).toUpperCase() + options.sameSite.slice(1).toLowerCase()}`;
  }
  if (options.secure) {
    str += '; Secure';
  }
  if (options.httpOnly) {
    str += '; HttpOnly';
  }
  return str;
}

/**
 * Parses a Cookie header string into key-value pairs.
 */
export function parseCookies(header: string): Record<string, string> {
  const result: Record<string, string> = {};
  if (!header) return result;
  const pairs = header.split(';');
  for (const pair of pairs) {
    const idx = pair.indexOf('=');
    if (idx === -1) continue;
    const key = decodeURIComponent(pair.slice(0, idx).trim());
    const val = decodeURIComponent(pair.slice(idx + 1).trim());
    result[key] = val;
  }
  return result;
}

/**
 * Serializes the authentication JWT into a hardened HttpOnly cookie.
 */
export function setAuthCookies(
  res: VercelResponse,
  jwtToken: string,
  ttlSeconds: number
): { csrfToken: string } {
  // 1. Generate CSRF token for double-submit cookie defense
  const csrfToken = crypto.randomBytes(24).toString('hex');

  // 2. HttpOnly, Secure, SameSite=Lax Auth Cookie containing signed JWT
  const authCookie = serializeCookie(AUTH_COOKIE_NAME, jwtToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    maxAge: ttlSeconds
  });

  // 3. Readable CSRF Cookie for frontend JavaScript double-submit verification
  const csrfCookie = serializeCookie(CSRF_COOKIE_NAME, csrfToken, {
    httpOnly: false,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    maxAge: ttlSeconds
  });

  res.setHeader('Set-Cookie', [authCookie, csrfCookie]);
  return { csrfToken };
}

/**
 * Clears the authentication and CSRF cookies on logout or revocation.
 */
export function clearAuthCookies(res: VercelResponse): void {
  const expiredAuthCookie = serializeCookie(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
    maxAge: 0
  });

  const expiredCsrfCookie = serializeCookie(CSRF_COOKIE_NAME, '', {
    httpOnly: false,
    secure: isProduction,
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
    maxAge: 0
  });

  res.setHeader('Set-Cookie', [expiredAuthCookie, expiredCsrfCookie]);
}

/**
 * Extracts the authentication JWT from request cookies or Authorization header.
 */
export function extractAuthToken(req: VercelRequest): string | null {
  // 1. From Cookie header
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const cookies = parseCookies(cookieHeader);
    if (cookies[AUTH_COOKIE_NAME]) {
      return cookies[AUTH_COOKIE_NAME];
    }
  }

  // 2. From Authorization Bearer header (for server-to-server or API calls)
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7).trim();
  }

  return null;
}

/**
 * Validates CSRF header against CSRF cookie for mutating HTTP methods (POST, PUT, DELETE).
 */
export function validateCsrf(req: VercelRequest): boolean {
  // GET, HEAD, and OPTIONS do not mutate state
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') {
    return true;
  }

  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return true; // Direct API client without cookies uses bearer token

  const cookies = parseCookies(cookieHeader);
  const cookieCsrf = cookies[CSRF_COOKIE_NAME];
  if (!cookieCsrf) {
    // If auth cookie is not present, CSRF is not required (e.g. initial login request)
    return true;
  }

  const headerCsrf = req.headers['x-csrf-token'] || req.headers['x-xsrf-token'];
  return cookieCsrf === headerCsrf;
}
