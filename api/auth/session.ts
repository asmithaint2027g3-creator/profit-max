import type { VercelRequest, VercelResponse } from '@vercel/node';
import { authenticateRequest } from '../_lib/auth-middleware';
import { updateRedisSessionActivity } from '../_lib/redis';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Strictly authenticate against JWT signature + active Redis Cloud session
  const auth = await authenticateRequest(req);
  if (!auth.success) {
    return res.status(auth.status).json({
      authenticated: false,
      error: auth.error,
      code: auth.code
    });
  }

  const { context } = auth;
  const now = new Date().toISOString();

  // Async update of last_active timestamp in Redis Cloud
  updateRedisSessionActivity(context.sessionId, now).catch(() => {});

  return res.status(200).json({
    authenticated: true,
    user: {
      userId: context.userId,
      email: context.email || context.session.user_email,
      role: context.role || 'user',
      accountStatus: 'Active'
    },
    session: {
      sessionId: context.sessionId,
      createdAt: context.session.created_at,
      expiresAt: context.session.expires_at,
      lastActive: now,
      status: context.session.status
    }
  });
}

