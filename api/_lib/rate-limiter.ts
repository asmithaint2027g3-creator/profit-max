import { getRedisClient } from './redis';

/**
 * Sliding window rate limiter backed by Redis Cloud, with in-memory fallback.
 */
const inMemoryStore = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(
  key: string,
  maxAttempts: number = 5,
  windowSeconds: number = 60
): Promise<{ allowed: boolean; remaining: number; resetSeconds: number }> {
  const rateKey = `rate_limit:${key}`;

  try {
    const client = await getRedisClient();
    const current = await client.incr(rateKey);

    if (current === 1) {
      await client.expire(rateKey, windowSeconds);
    }

    const ttl = await client.ttl(rateKey);
    const allowed = current <= maxAttempts;
    const remaining = Math.max(0, maxAttempts - current);

    return { allowed, remaining, resetSeconds: Math.max(0, ttl) };
  } catch {
    // Graceful fallback to in-memory tracking if Redis is unreachable or during startup
    const now = Date.now();
    const record = inMemoryStore.get(key);

    if (!record || now > record.resetAt) {
      inMemoryStore.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
      return { allowed: true, remaining: maxAttempts - 1, resetSeconds: windowSeconds };
    }

    record.count++;
    const remaining = Math.max(0, maxAttempts - record.count);
    const resetSeconds = Math.ceil((record.resetAt - now) / 1000);

    return { allowed: record.count <= maxAttempts, remaining, resetSeconds };
  }
}

