import type { VercelRequest, VercelResponse } from '@vercel/node';
import { pingRedis } from '../_lib/redis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const diagnostics: Record<string, any> = {
    timestamp: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'
  };

  // 1. Redis Cloud Configuration & Ping Check
  const hasRedisUrl = !!process.env.REDIS_URL;
  diagnostics.redis = {
    configured: hasRedisUrl,
    tlsRequired: process.env.REDIS_URL?.startsWith('rediss://') ?? false
  };

  if (hasRedisUrl) {
    const pingResult = await pingRedis();
    diagnostics.redis.connected = pingResult.ok;
    diagnostics.redis.latencyMs = pingResult.latencyMs;
    if (!pingResult.ok) {
      diagnostics.redis.error = pingResult.error;
    }
  } else {
    diagnostics.redis.connected = false;
    diagnostics.redis.error = 'REDIS_URL environment variable is not configured.';
  }

  // 2. JWT Configuration Check
  const jwtSecret = process.env.JWT_SECRET;
  diagnostics.jwt = {
    configured: !!jwtSecret,
    validLength: !!jwtSecret && jwtSecret.length >= 32,
    issuer: process.env.JWT_ISSUER || 'profitmachines-auth',
    audience: process.env.JWT_AUDIENCE || 'profitmachines-client'
  };

  // 3. Google Sheets Connection Check
  const hasScriptUrl = !!process.env.GOOGLE_SCRIPT_URL;
  const hasServiceAccount = !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && !!process.env.GOOGLE_PRIVATE_KEY;
  diagnostics.googleSheets = {
    webhookConfigured: hasScriptUrl,
    directApiConfigured: hasServiceAccount,
    spreadsheetTarget: 'Traffic Analysis (Session_Logs)'
  };

  if (hasScriptUrl) {
    try {
      const pingRes = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'check_user_exists', userId: '__health_ping__', email: 'ping@health.local' })
      });
      diagnostics.googleSheets.webhookReachable = pingRes.ok;
    } catch (e: any) {
      diagnostics.googleSheets.webhookReachable = false;
      diagnostics.googleSheets.error = 'Unable to reach Google Apps Script webhook';
    }
  }

  const allReady = diagnostics.redis.connected && diagnostics.jwt.configured && (hasScriptUrl || hasServiceAccount);

  return res.status(allReady ? 200 : 200).json({
    status: allReady ? 'READY' : 'CONFIGURATION_PENDING',
    diagnostics
  });
}

