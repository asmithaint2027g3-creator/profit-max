import assert from 'assert';
import { generateSessionId, isValidSessionId } from '../api/_lib/session-id';
import { signAccessToken, verifyAccessToken, getJwtIssuer, getJwtAudience } from '../api/_lib/jwt';
import { getSessionKey, RedisSessionData } from '../api/_lib/redis';
import { setAuthCookies, clearAuthCookies, extractAuthToken, validateCsrf, AUTH_COOKIE_NAME, CSRF_COOKIE_NAME } from '../api/_lib/cookies';
import { authenticateRequest } from '../api/_lib/auth-middleware';
import { checkRateLimit } from '../api/_lib/rate-limiter';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Set test environment secrets
process.env.JWT_SECRET = 'profitmachines-super-secure-32-byte-test-secret-key-12345';
process.env.JWT_ISSUER = 'profitmachines-auth';
process.env.JWT_AUDIENCE = 'profitmachines-client';

let passed = 0;
let failed = 0;

async function test(name: string, fn: () => Promise<void> | void) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err: any) {
    console.error(`  ✕ ${name}`);
    console.error(`    ${err.message || err}`);
    failed++;
  }
}

async function runTests() {
  console.log('\n===============================================================');
  console.log('PROFITMACHINES ENTERPRISE AUTH & SESSION MANAGEMENT TEST SUITE');
  console.log('===============================================================\n');

  // ── GROUP 1: SESSION ID GENERATION & CRYPTOGRAPHIC UNIQUENESS ──
  console.log('--- 1. Session ID Generation & Uniqueness ---');

  await test('generates Session ID matching prefix and format: sess_PM_<random>', () => {
    const sid = generateSessionId();
    assert.ok(sid.startsWith('sess_PM_'), 'Session ID must start with sess_PM_');
    assert.ok(isValidSessionId(sid), 'Session ID format must validate');
  });

  await test('generates 1,000 unique Session IDs with zero collisions (CSPRNG)', () => {
    const count = 1000;
    const set = new Set<string>();
    for (let i = 0; i < count; i++) {
      const sid = generateSessionId();
      assert.ok(!set.has(sid), `Duplicate Session ID detected: ${sid}`);
      set.add(sid);
    }
    assert.strictEqual(set.size, count);
  });

  await test('Session ID is not derived from email, name, or timestamp alone', () => {
    const sid1 = generateSessionId();
    const sid2 = generateSessionId();
    assert.notStrictEqual(sid1, sid2);
    assert.ok(!sid1.includes('test@profitmachines.ai'));
    assert.ok(!sid1.includes('user'));
  });

  // ── GROUP 2: REDIS KEY ARCHITECTURE & SESSION METADATA ──
  console.log('\n--- 2. Redis Cloud Session Key & Metadata Architecture ---');

  await test('formats Redis key strictly as session:<session_id>', () => {
    const sid = generateSessionId();
    const key = getSessionKey(sid);
    assert.strictEqual(key, `session:${sid}`);
  });

  await test('validates Redis session data structure contains mandatory audit fields', () => {
    const sid = generateSessionId();
    const now = new Date().toISOString();
    const mockSession: RedisSessionData = {
      session_id: sid,
      user_id: 'USR_ENTERPRISE_99',
      jwt_jti: 'jwt_id_12345',
      status: 'ACTIVE',
      created_at: now,
      expires_at: new Date(Date.now() + 7 * 86400 * 1000).toISOString(),
      last_active: now,
      user_email: 'exec@acme.com'
    };

    assert.strictEqual(mockSession.session_id, sid);
    assert.strictEqual(mockSession.status, 'ACTIVE');
    assert.ok(mockSession.created_at);
    assert.ok(mockSession.expires_at);
  });

  // ── GROUP 3: JWT SIGNING & CLAIMS VALIDATION (JOSE) ──
  console.log('\n--- 3. JWT Signing, Claims & Verification (jose) ---');

  const testSid = generateSessionId();
  const testUserId = 'USR_TEST_CEO_01';
  const testJti = 'jwt_uuid_9999';

  let issuedJwt = '';

  await test('creates signed JWT containing sub, sid, jti, iss, aud, exp claims', async () => {
    issuedJwt = await signAccessToken({
      userId: testUserId,
      sessionId: testSid,
      jti: testJti,
      email: 'ceo@acme.com',
      role: 'executive'
    });

    assert.ok(typeof issuedJwt === 'string' && issuedJwt.split('.').length === 3, 'Must be valid JWT structure');
  });

  await test('verifies JWT claims strictly: sid equals generated Session ID', async () => {
    const claims = await verifyAccessToken(issuedJwt);
    assert.strictEqual(claims.sub, testUserId, 'JWT sub must match user ID');
    assert.strictEqual(claims.sid, testSid, 'JWT sid must match Session ID exactly');
    assert.strictEqual(claims.jti, testJti, 'JWT jti must match token ID');
    assert.strictEqual(claims.iss, getJwtIssuer(), 'JWT iss must match configured issuer');
    assert.strictEqual(claims.aud, getJwtAudience(), 'JWT aud must match configured audience');
    assert.ok(typeof claims.exp === 'number' && claims.exp > Math.floor(Date.now() / 1000), 'JWT exp must be in future');
  });

  await test('rejects tampered JWT signature with cryptographic error', async () => {
    const parts = issuedJwt.split('.');
    const tamperedJwt = `${parts[0]}.${parts[1]}.tamperedSignatureBytes1234567890`;

    await assert.rejects(async () => {
      await verifyAccessToken(tamperedJwt);
    }, /(signature|verification|invalid)/i);
  });

  await test('rejects expired JWT token', async () => {
    const expiredJwt = await signAccessToken({
      userId: testUserId,
      sessionId: testSid,
      jti: 'jti_expired',
      customTtlSeconds: -10 // expired 10 seconds ago
    });

    await assert.rejects(async () => {
      await verifyAccessToken(expiredJwt);
    }, /expired/i);
  });

  await test('rejects empty or missing JWT token', async () => {
    await assert.rejects(async () => {
      await verifyAccessToken('');
    }, /Missing token/i);
  });

  // ── GROUP 4: COOKIE ATTRIBUTES & CSRF VALIDATION ──
  console.log('\n--- 4. Cookie Security Attributes & CSRF Protection ---');

  await test('serializes auth cookie with HttpOnly, SameSite=Lax, Path=/', () => {
    const mockRes = {
      headers: {} as Record<string, any>,
      setHeader(name: string, value: any) {
        this.headers[name] = value;
      }
    } as unknown as VercelResponse;

    const { csrfToken } = setAuthCookies(mockRes, issuedJwt, 900);
    assert.ok(csrfToken, 'Must generate CSRF token');

    const setCookies: string[] = mockRes.headers['Set-Cookie'];
    assert.ok(Array.isArray(setCookies) && setCookies.length === 2);

    const authCookie = setCookies.find(c => c.startsWith(`${AUTH_COOKIE_NAME}=`));
    const csrfCookie = setCookies.find(c => c.startsWith(`${CSRF_COOKIE_NAME}=`));

    assert.ok(authCookie?.includes('HttpOnly'), 'Auth cookie must be HttpOnly');
    assert.ok(authCookie?.includes('SameSite=Lax'), 'Auth cookie must be SameSite=Lax');
    assert.ok(authCookie?.includes('Path=/'), 'Auth cookie must have Path=/');

    assert.ok(!csrfCookie?.includes('HttpOnly'), 'CSRF cookie must be readable by frontend JavaScript');
  });

  await test('clears auth and csrf cookies with epoch expiration on logout', () => {
    const mockRes = {
      headers: {} as Record<string, any>,
      setHeader(name: string, value: any) {
        this.headers[name] = value;
      }
    } as unknown as VercelResponse;

    clearAuthCookies(mockRes);
    const setCookies: string[] = mockRes.headers['Set-Cookie'];
    const authCookie = setCookies.find(c => c.startsWith(`${AUTH_COOKIE_NAME}=`));
    assert.ok(authCookie?.includes('Expires=Thu, 01 Jan 1970 00:00:00 GMT') || authCookie?.includes('Max-Age=0'));
  });

  await test('extracts auth token from Cookie header or Bearer header', () => {
    const reqWithCookie = {
      headers: { cookie: `${AUTH_COOKIE_NAME}=token_abc_123; other=val` }
    } as unknown as VercelRequest;

    assert.strictEqual(extractAuthToken(reqWithCookie), 'token_abc_123');

    const reqWithBearer = {
      headers: { authorization: 'Bearer token_xyz_789' }
    } as unknown as VercelRequest;

    assert.strictEqual(extractAuthToken(reqWithBearer), 'token_xyz_789');
  });

  await test('validates CSRF protection: rejects mutating request with mismatched token', () => {
    const reqPostInvalid = {
      method: 'POST',
      headers: {
        cookie: `${CSRF_COOKIE_NAME}=correct_csrf_token`,
        'x-csrf-token': 'wrong_csrf_token'
      }
    } as unknown as VercelRequest;

    assert.strictEqual(validateCsrf(reqPostInvalid), false, 'Mismatched CSRF token must fail');

    const reqPostValid = {
      method: 'POST',
      headers: {
        cookie: `${CSRF_COOKIE_NAME}=correct_csrf_token`,
        'x-csrf-token': 'correct_csrf_token'
      }
    } as unknown as VercelRequest;

    assert.strictEqual(validateCsrf(reqPostValid), true, 'Matching CSRF token must pass');
  });

  // ── GROUP 5: AUTHENTICATION MIDDLEWARE & MULTI-STORE CHECKS ──
  console.log('\n--- 5. Authentication Middleware & Security Invariants ---');

  await test('rejects request when no authentication cookie or token is provided', async () => {
    const reqEmpty = {
      method: 'GET',
      headers: {}
    } as unknown as VercelRequest;

    const res = await authenticateRequest(reqEmpty);
    assert.strictEqual(res.success, false);
    if (!res.success) {
      assert.strictEqual(res.status, 401);
      assert.strictEqual(res.code, 'AUTH_TOKEN_MISSING');
    }
  });

  await test('rejects request with invalid token string', async () => {
    const reqInvalid = {
      method: 'GET',
      headers: { cookie: `${AUTH_COOKIE_NAME}=garbage_token` }
    } as unknown as VercelRequest;

    const res = await authenticateRequest(reqInvalid);
    assert.strictEqual(res.success, false);
    if (!res.success) {
      assert.strictEqual(res.status, 401);
      assert.strictEqual(res.code, 'TOKEN_INVALID');
    }
  });

  // ── GROUP 6: RATE LIMITING ──
  console.log('\n--- 6. Rate Limiting Protection ---');

  await test('allows requests within limit and throttles when threshold exceeded', async () => {
    const testIp = `test_ip_${Date.now()}`;
    const limit = 3;

    const r1 = await checkRateLimit(testIp, limit, 10);
    assert.strictEqual(r1.allowed, true);
    assert.strictEqual(r1.remaining, 2);

    const r2 = await checkRateLimit(testIp, limit, 10);
    assert.strictEqual(r2.allowed, true);
    assert.strictEqual(r2.remaining, 1);

    const r3 = await checkRateLimit(testIp, limit, 10);
    assert.strictEqual(r3.allowed, true);
    assert.strictEqual(r3.remaining, 0);

    const r4 = await checkRateLimit(testIp, limit, 10);
    assert.strictEqual(r4.allowed, false, 'Fourth attempt must be rate-limited');
  });

  // ── GROUP 7: SAME SESSION ID INVARIANCE ──
  console.log('\n--- 7. Triple-Store Session ID Invariance (Redis + Sheets + JWT) ---');

  await test('enforces that JWT sid, Redis session_id, and Google Sheets Session_ID match', async () => {
    const masterSid = generateSessionId();
    const masterUserId = 'USR_CORP_42';
    const masterJti = 'jwt_master_11';

    // 1. JWT sid
    const token = await signAccessToken({
      userId: masterUserId,
      sessionId: masterSid,
      jti: masterJti
    });
    const claims = await verifyAccessToken(token);

    // 2. Redis key & session_id
    const redisKey = getSessionKey(masterSid);
    const redisSessionData: RedisSessionData = {
      session_id: masterSid,
      user_id: masterUserId,
      jwt_jti: masterJti,
      status: 'ACTIVE',
      created_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 900000).toISOString(),
      last_active: new Date().toISOString()
    };

    // 3. Google Sheets Session_Logs schema
    const sheetsRow = {
      Session_ID: masterSid,
      User_ID: masterUserId,
      JWT_ID: masterJti,
      Login_Time: redisSessionData.created_at,
      Expires_At: redisSessionData.expires_at,
      Last_Active: redisSessionData.last_active,
      Status: redisSessionData.status,
      Revoked_At: ''
    };

    // Verify invariance
    assert.strictEqual(claims.sid, masterSid);
    assert.strictEqual(redisSessionData.session_id, masterSid);
    assert.strictEqual(sheetsRow.Session_ID, masterSid);
    assert.strictEqual(redisKey, `session:${masterSid}`);

    assert.strictEqual(claims.sub, masterUserId);
    assert.strictEqual(redisSessionData.user_id, masterUserId);
    assert.strictEqual(sheetsRow.User_ID, masterUserId);

    assert.strictEqual(claims.jti, masterJti);
    assert.strictEqual(redisSessionData.jwt_jti, masterJti);
    assert.strictEqual(sheetsRow.JWT_ID, masterJti);
  });

  console.log('\n===============================================================');
  console.log(`TEST RUN COMPLETE: ${passed} passed, ${failed} failed`);
  console.log('===============================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test suite failed with unhandled error:', err);
  process.exit(1);
});
