import { createClient, RedisClientType } from 'redis';

export interface RedisSessionData {
  session_id: string;
  user_id: string;
  jwt_jti: string;
  status: 'ACTIVE' | 'REVOKED' | 'EXPIRED';
  created_at: string;
  expires_at: string;
  last_active: string;
  revoked_at?: string;
  user_email?: string;
  ip_address?: string;
  user_agent?: string;
}

// Global cached client reference for Vercel serverless runtime
declare global {
  // eslint-disable-next-line no-var
  var __redisClient: RedisClientType | undefined;
  // eslint-disable-next-line no-var
  var __redisConnecting: Promise<RedisClientType> | undefined;
}

/**
 * Returns a connected Redis client instance.
 * Reuses the existing connection across warm serverless invocations.
 */
export async function getRedisClient(): Promise<RedisClientType> {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    throw new Error('REDIS_URL configuration is missing. Please configure your Redis Cloud connection string.');
  }

  // Reuse existing connected client if ready
  if (global.__redisClient && global.__redisClient.isOpen) {
    return global.__redisClient;
  }

  // Avoid concurrent connection attempts
  if (global.__redisConnecting) {
    return global.__redisConnecting;
  }

  global.__redisConnecting = (async () => {
    try {
      const client: RedisClientType = createClient({
        url: redisUrl,
        socket: {
          connectTimeout: 5000,
          reconnectStrategy: (retries: number) => {
            if (retries > 3) {
              return new Error('Redis connection retry limit reached');
            }
            return Math.min(retries * 200, 1000);
          }
        }
      });

      client.on('error', (err) => {
        // Log safe message without leaking REDIS_URL or credentials
        console.error('[Redis Cloud] Client error occurred:', err.message || 'Connection error');
      });

      await client.connect();
      global.__redisClient = client;
      return client;
    } finally {
      global.__redisConnecting = undefined;
    }
  })();

  return global.__redisConnecting;
}

/**
 * Format key: session:<session_id>
 */
export function getSessionKey(sessionId: string): string {
  return `session:${sessionId}`;
}

/**
 * Stores a new session in Redis Cloud with TTL enforcement.
 */
export async function createRedisSession(
  session: RedisSessionData,
  ttlSeconds: number
): Promise<boolean> {
  const client = await getRedisClient();
  const key = getSessionKey(session.session_id);

  // Store metadata as JSON string for atomicity and structured querying
  await client.set(key, JSON.stringify(session), {
    EX: ttlSeconds
  });

  return true;
}

/**
 * Retrieves a session from Redis Cloud.
 */
export async function getRedisSession(sessionId: string): Promise<RedisSessionData | null> {
  try {
    const client = await getRedisClient();
    const key = getSessionKey(sessionId);
    const raw = await client.get(key);

    if (!raw) return null;
    return JSON.parse(raw) as RedisSessionData;
  } catch (err: any) {
    console.error('[Redis Cloud] Failed to retrieve session:', err.message || err);
    throw err;
  }
}

/**
 * Updates the last_active timestamp of an active session.
 */
export async function updateRedisSessionActivity(
  sessionId: string,
  lastActive: string
): Promise<boolean> {
  try {
    const client = await getRedisClient();
    const key = getSessionKey(sessionId);
    const existing = await getRedisSession(sessionId);

    if (!existing || existing.status !== 'ACTIVE') {
      return false;
    }

    existing.last_active = lastActive;
    const ttl = await client.ttl(key);

    if (ttl > 0) {
      await client.set(key, JSON.stringify(existing), { EX: ttl });
    } else {
      await client.set(key, JSON.stringify(existing));
    }
    return true;
  } catch (err: any) {
    console.error('[Redis Cloud] Failed to update activity:', err.message || err);
    return false;
  }
}

/**
 * Revokes a session immediately in Redis Cloud.
 * Marks status as REVOKED and shortens TTL to a short grace window (e.g. 60 seconds)
 * to ensure immediate authorization failure while preserving audit trail briefly.
 */
export async function revokeRedisSession(sessionId: string): Promise<boolean> {
  const client = await getRedisClient();
  const key = getSessionKey(sessionId);
  const existing = await getRedisSession(sessionId);

  if (!existing) {
    // Already removed or expired
    return true;
  }

  existing.status = 'REVOKED';
  existing.revoked_at = new Date().toISOString();

  // Overwrite with revoked status and expire in 60s
  await client.set(key, JSON.stringify(existing), { EX: 60 });
  return true;
}

/**
 * Verifies connectivity to Redis Cloud without logging or leaking credentials.
 */
export async function pingRedis(): Promise<{ ok: boolean; latencyMs?: number; error?: string }> {
  const start = Date.now();
  try {
    const client = await getRedisClient();
    const pong = await client.ping();
    const latencyMs = Date.now() - start;
    return { ok: pong === 'PONG', latencyMs };
  } catch (err: any) {
    return { ok: false, error: err.message || 'Failed to connect to Redis Cloud' };
  }
}

