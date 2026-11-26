export interface SheetSessionRecord {
  sessionId: string;
  userId: string;
  jwtId: string;
  loginTime: string;
  expiresAt: string;
  lastActive: string;
  status: 'ACTIVE' | 'REVOKED' | 'EXPIRED';
  revokedAt?: string;
}

const REQUIRED_HEADERS = [
  'Session_ID',
  'User_ID',
  'JWT_ID',
  'Login_Time',
  'Expires_At',
  'Last_Active',
  'Status',
  'Revoked_At'
];

/**
 * Writes to Google Sheets via Google Apps Script Webhook.
 * This reuses the already authorized and operational deployment for the Traffic Analysis spreadsheet.
 */
async function writeSessionViaAppsScript(action: 'create_session_log' | 'update_session_log' | 'revoke_session_log', payload: any): Promise<boolean> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbz46112XdbuaowQcouaSzy83NtRtbZPbuULU2mlGM1De7tupz3ESzVxqTYU7WVXIU8P/exec';

  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8' // avoids CORS / redirects on Apps Script
    },
    body: JSON.stringify({
      action,
      ...payload
    })
  });

  try {
    const result = await response.json();
    if (result && result.status === 'error') {
      throw new Error(result.message || 'Google Sheets Apps Script returned error status');
    }
    return true;
  } catch (err: any) {
    if (response.ok) return true;
    throw new Error(`Failed to communicate with Google Sheets Apps Script: ${err.message || err}`);
  }
}

/**
 * Logs a new session to the Session_Logs tab in the Traffic Analysis Google Spreadsheet.
 */
export async function logSessionToGoogleSheets(record: SheetSessionRecord): Promise<boolean> {
  return await writeSessionViaAppsScript('create_session_log', {
    sessionId: record.sessionId,
    userId: record.userId,
    jwtId: record.jwtId,
    loginTime: record.loginTime,
    expiresAt: record.expiresAt,
    lastActive: record.lastActive,
    status: record.status,
    revokedAt: record.revokedAt || ''
  });
}

/**
 * Updates a session in Session_Logs (e.g. on revocation, logout, or activity update).
 */
export async function updateSessionInGoogleSheets(update: {
  sessionId: string;
  status: 'ACTIVE' | 'REVOKED' | 'EXPIRED';
  revokedAt?: string;
  lastActive?: string;
}): Promise<boolean> {
  return await writeSessionViaAppsScript('update_session_log', {
    sessionId: update.sessionId,
    status: update.status,
    revokedAt: update.revokedAt || '',
    lastActive: update.lastActive || ''
  });
}
