import { beforeEach, describe, expect, test } from 'vitest';
import express from 'express';
import request from 'supertest';
import { createApp } from '../../src/app.js';
import createAuthRoutes from '../../src/routes/authRoutes.js';
import { loadSeed } from '../../src/services/requestService.js';
import { STAFF } from '../helpers/auth.js';

beforeEach(async () => { await loadSeed(); });
function login(app, patch = {}) {
  return request(app).post('/api/auth/login').send({ ...STAFF, ...patch });
}
describe('login brute-force protection', () => {
  test('five wrong passwords return 401; sixth request is blocked even with correct credentials', async () => {
    const app = createApp();
    for (let index = 0; index < 5; index++) await login(app, { password: 'incorrect-password' }).expect(401);
    const blocked = await login(app).expect(429);
    expect(Number(blocked.headers['retry-after'])).toBeGreaterThan(0);
    expect(blocked.body.error).toBeTruthy();
    await login(app, { email: 'another@example.org', password: 'incorrect-password' }).expect(401);
  });
  test('a successful login clears earlier failures', async () => {
    const app = createApp();
    for (let index = 0; index < 4; index++) await login(app, { password: 'incorrect-password' }).expect(401);
    await login(app).expect(200);
    await login(app, { password: 'incorrect-password' }).expect(401);
    await login(app).expect(200);
  });
  test('malformed inputs do not consume password guesses', async () => {
    const app = createApp();
    for (let index = 0; index < 6; index++) await request(app).post('/api/auth/login').send({}).expect(400);
    await login(app).expect(200);
  });
  test('the block expires and separate app instances do not share limiter state', async () => {
    let time = 0;
    const app = express(); app.use(express.json());
    app.use('/api/auth', createAuthRoutes({ now: () => time, windowMs: 1000 }));
    for (let index = 0; index < 5; index++) await login(app, { password: 'incorrect-password' }).expect(401);
    await login(app).expect(429);
    await login(createApp()).expect(200);
    time = 1000;
    await login(app).expect(200);
  });
});
test('JSON and error responses have nosniff and no framework disclosure', async () => {
  const app = createApp();
  for (const path of ['/api/health', '/api/missing']) {
    const response = await request(app).get(path);
    expect(response.headers['x-content-type-options']).toBe('nosniff');
    expect(response.headers).not.toHaveProperty('x-powered-by');
  }
});
