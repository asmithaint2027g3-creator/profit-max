import type { VercelRequest, VercelResponse } from '@vercel/node';
import { withAuth, AuthenticatedContext } from '../_lib/auth-middleware';

/**
 * Example Protected Enterprise Endpoint
 * Requires valid JWT signature AND active Redis Cloud session matching the same Session ID.
 */
async function protectedHandler(req: VercelRequest, res: VercelResponse, auth: AuthenticatedContext) {
  return res.status(200).json({
    success: true,
    message: 'Authorized enterprise access granted.',
    sessionMeta: {
      userId: auth.userId,
      sessionId: auth.sessionId,
      jwtId: auth.jwtId,
      sessionStatus: auth.session.status,
      sessionCreated: auth.session.created_at,
      sessionExpires: auth.session.expires_at
    },
    data: {
      enterpriseTier: 'ProfitMachines Alpha',
      featuresEnabled: [
        'Deterministic RevOps Physics',
        'Autonomous Pipeline Telemetry',
        'Redis Cloud Session Guard',
        'Google Sheets Session Audit Sync'
      ]
    }
  });
}

export default withAuth(protectedHandler);

