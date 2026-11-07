import type { VercelRequest, VercelResponse } from '@vercel/node';
import { extractAuthToken, clearAuthCookies } from '../_lib/cookies';
import { verifyAccessToken } from '../_lib/jwt';
import { revokeRedisSession } from '../_lib/redis';
import { updateSessionInGoogleSheets } from '../_lib/google-sheets-sessions';

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

  const token = extractAuthToken(req);

  // If no token was provided, just clear the cookies and return success
  if (!token) {
    clearAuthCookies(res);
    return res.status(200).json({
      success: true,
      message: 'No active session found. Cookies cleared.'
    });
  }

  let sessionId: string | null = null;
  try {
    const claims = await verifyAccessToken(token);
    sessionId = claims.sid;
  } catch (err: any) {
    // Even if token verification expired, clear the cookie
    clearAuthCookies(res);
    return res.status(200).json({
      success: true,
      message: 'Session was already expired or invalid. Cookies cleared.'
    });
  }

  if (!sessionId) {
    clearAuthCookies(res);
    return res.status(200).json({ success: true, message: 'Logged out successfully.' });
  }

  // 1. Revoke in Redis Cloud
  try {
    await revokeRedisSession(sessionId);
  } catch (redisErr: any) {
    console.error('[Logout] Redis session revocation failed:', redisErr.message || redisErr);
    return res.status(500).json({
      error: 'Failed to revoke session in session store.',
      code: 'REDIS_REVOCATION_FAILURE'
    });
  }

  // 2. Update Google Sheets 'Session_Logs' tab with REVOKED status and timestamp
  const revokedAt = new Date().toISOString();
  try {
    await updateSessionInGoogleSheets({
      sessionId,
      status: 'REVOKED',
      revokedAt
    });
  } catch (sheetsErr: any) {
    console.warn('[Logout] Google Sheets audit revocation note deferred:', sheetsErr.message || sheetsErr);
    // Non-fatal for logout completion since Redis session is already invalidated
  }

  // 3. Clear HttpOnly and CSRF cookies
  clearAuthCookies(res);

  return res.status(200).json({
    success: true,
    message: 'Session revoked successfully across Redis Cloud and audit logs.'
  });
}

