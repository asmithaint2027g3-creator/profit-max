import crypto from 'crypto';

/**
 * Generates a cryptographically secure, unpredictable Session ID.
 * Format: sess_PM_<base64url_random_bytes>
 *
 * Requirements:
 * - Uses Node.js crypto.randomBytes (CSPRNG).
 * - Never derived from email, name, timestamp alone, or sequential numbers.
 * - Distinct for each login.
 * - Cannot be forged or chosen by the client.
 */
export function generateSessionId(): string {
  const randomBytes = crypto.randomBytes(24);
  const randomStr = randomBytes.toString('base64url');
  return `sess_PM_${randomStr}`;
}

/**
 * Validates that a session ID adheres to the expected format.
 */
export function isValidSessionId(sessionId: string): boolean {
  if (!sessionId || typeof sessionId !== 'string') return false;
  return /^sess_PM_[A-Za-z0-9_-]{32}$/.test(sessionId);
}

