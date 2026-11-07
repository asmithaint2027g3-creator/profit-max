import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

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
 * Strategy 1: Writes to Google Sheets via Google Apps Script Webhook.
 * This reuses the already authorized and operational deployment for the Traffic Analysis spreadsheet.
 */
async function writeSessionViaAppsScript(action: 'create_session_log' | 'update_session_log' | 'revoke_session_log', payload: any): Promise<boolean> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    throw new Error('GOOGLE_SCRIPT_URL configuration missing.');
  }

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
 * Strategy 2: Direct Google Sheets API via service account credentials (if configured).
 */
async function getDirectGoogleSpreadsheet(): Promise<GoogleSpreadsheet | null> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const sheetId = process.env.TRAFFIC_ANALYSIS_SPREADSHEET_ID || process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!email || !privateKey || !sheetId) {
    return null; // Fall back to Apps Script webhook
  }

  const serviceAccountAuth = new JWT({
    email,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
  await doc.loadInfo();
  return doc;
}

/**
 * Logs a new session to the Session_Logs tab in the Traffic Analysis Google Spreadsheet.
 * Adheres strictly to the column schema:
 * Session_ID | User_ID | JWT_ID | Login_Time | Expires_At | Last_Active | Status | Revoked_At
 */
export async function logSessionToGoogleSheets(record: SheetSessionRecord): Promise<boolean> {
  // 1. Try Direct Google Sheets API if service account configured
  try {
    const doc = await getDirectGoogleSpreadsheet();
    if (doc) {
      let sheet = doc.sheetsByTitle['Session_Logs'];
      if (!sheet) {
        sheet = await doc.addSheet({
          title: 'Session_Logs',
          headerValues: REQUIRED_HEADERS
        });
      }

      // Check if session ID already exists to prevent duplicate rows on retries
      const rows = await sheet.getRows();
      const existing = rows.find(r => r.get('Session_ID') === record.sessionId);

      if (!existing) {
        await sheet.addRow({
          Session_ID: record.sessionId,
          User_ID: record.userId,
          JWT_ID: record.jwtId,
          Login_Time: record.loginTime,
          Expires_At: record.expiresAt,
          Last_Active: record.lastActive,
          Status: record.status,
          Revoked_At: record.revokedAt || ''
        });
      }
      return true;
    }
  } catch (directErr: any) {
    console.warn('[Google Sheets] Direct API attempt failed, attempting Webhook fallback:', directErr.message || directErr);
  }

  // 2. Dispatch to Google Apps Script Webhook (primary production path)
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
  // 1. Try Direct Google Sheets API if service account configured
  try {
    const doc = await getDirectGoogleSpreadsheet();
    if (doc) {
      const sheet = doc.sheetsByTitle['Session_Logs'];
      if (sheet) {
        const rows = await sheet.getRows();
        const row = rows.find(r => r.get('Session_ID') === update.sessionId);
        if (row) {
          row.set('Status', update.status);
          if (update.revokedAt) row.set('Revoked_At', update.revokedAt);
          if (update.lastActive) row.set('Last_Active', update.lastActive);
          await row.save();
          return true;
        }
      }
    }
  } catch (directErr: any) {
    console.warn('[Google Sheets] Direct API update failed, attempting Webhook fallback:', directErr.message || directErr);
  }

  // 2. Dispatch to Google Apps Script Webhook
  return await writeSessionViaAppsScript('update_session_log', {
    sessionId: update.sessionId,
    status: update.status,
    revokedAt: update.revokedAt || '',
    lastActive: update.lastActive || ''
  });
}

