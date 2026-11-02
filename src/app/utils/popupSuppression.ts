/**
 * Popup Suppression & Orchestration Utility
 * 
 * Rules:
 * - Dismissed popup: Suppressed for 14 days
 * - Submitted form / conversion: Suppressed for 30 days
 * - Graceful fallback: Uses in-memory Map if localStorage is blocked or unavailable
 * - Single-popup enforcement: Ensures only one nonessential marketing popup can be open at a time
 * - Privacy protection: Strictly minimal data (id, status, expiresAt); no cross-site or fingerprinting trackers
 * - Excludes legally required consent/privacy banners (e.g. CookieConsent)
 */

interface SuppressionRecord {
  id: string;
  status: 'dismissed' | 'submitted';
  timestamp: number;
  expiresAt: number;
}

const STORAGE_PREFIX = 'pm_popup_suppress_';
const inMemoryStore = new Map<string, SuppressionRecord>();

// Global tracker for currently active marketing popup (only one allowed at a time)
let currentlyActivePopupId: string | null = null;

function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__pm_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks whether a specific marketing popup is currently suppressed.
 */
export function isPopupSuppressed(popupId: string): boolean {
  if (!popupId) return false;
  const now = Date.now();

  try {
    if (isLocalStorageAvailable()) {
      const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${popupId}`);
      if (raw) {
        const record: SuppressionRecord = JSON.parse(raw);
        if (record && record.expiresAt > now) {
          return true;
        }
        // Clean up expired entry
        window.localStorage.removeItem(`${STORAGE_PREFIX}${popupId}`);
      }
    }
  } catch (err) {
    // Fall back to memory check
  }

  const memRecord = inMemoryStore.get(popupId);
  if (memRecord) {
    if (memRecord.expiresAt > now) {
      return true;
    }
    inMemoryStore.delete(popupId);
  }

  return false;
}

/**
 * Record a user dismissal of a popup. Suppressed for 14 days by default.
 */
export function recordPopupDismissed(popupId: string, days = 14): void {
  if (!popupId) return;
  const now = Date.now();
  const expiresAt = now + days * 24 * 60 * 60 * 1000;
  const record: SuppressionRecord = {
    id: popupId,
    status: 'dismissed',
    timestamp: now,
    expiresAt,
  };

  try {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(`${STORAGE_PREFIX}${popupId}`, JSON.stringify(record));
    }
  } catch (err) {
    // Ignore storage quota or security errors gracefully
  }

  inMemoryStore.set(popupId, record);

  if (currentlyActivePopupId === popupId) {
    currentlyActivePopupId = null;
  }
}

/**
 * Record a successful lead capture or conversion. Suppressed for 30 days by default.
 */
export function recordPopupSubmitted(popupId: string, days = 30): void {
  if (!popupId) return;
  const now = Date.now();
  const expiresAt = now + days * 24 * 60 * 60 * 1000;
  const record: SuppressionRecord = {
    id: popupId,
    status: 'submitted',
    timestamp: now,
    expiresAt,
  };

  try {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(`${STORAGE_PREFIX}${popupId}`, JSON.stringify(record));
    }
  } catch (err) {
    // Ignore storage quota or security errors gracefully
  }

  inMemoryStore.set(popupId, record);

  if (currentlyActivePopupId === popupId) {
    currentlyActivePopupId = null;
  }
}

/**
 * Attempts to claim active marketing popup focus.
 * Returns true if permitted, false if another marketing popup is already open.
 */
export function acquireActivePopup(popupId: string): boolean {
  if (isPopupSuppressed(popupId)) {
    return false;
  }
  if (currentlyActivePopupId && currentlyActivePopupId !== popupId) {
    return false; // Another popup is already open
  }
  currentlyActivePopupId = popupId;
  return true;
}

/**
 * Releases the active marketing popup focus when closed.
 */
export function releaseActivePopup(popupId: string): void {
  if (currentlyActivePopupId === popupId) {
    currentlyActivePopupId = null;
  }
}

/**
 * Returns the currently active popup ID, if any.
 */
export function getActivePopup(): string | null {
  return currentlyActivePopupId;
}
