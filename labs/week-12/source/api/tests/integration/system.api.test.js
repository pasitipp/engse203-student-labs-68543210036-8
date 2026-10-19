import { beforeEach, describe, expect, test } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app.js';
import { create, findAll, findAllUsers, loadSeed } from '../../src/services/requestService.js';

const app = createApp();
beforeEach(async () => { await loadSeed(); });

describe('system endpoints and error responses', () => {
  test('health reports the same connected database used by requests', async () => {
    const response = await request(app).get('/api/health').expect(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.database).toMatchObject({ connected: true, driver: 'sqlite' });
  });
  test('users endpoint works without disclosing email addresses', async () => {
    const response = await request(app).get('/api/users').expect(200);
    expect(response.body).toHaveLength(5);
    expect(response.body[0]).toMatchObject({ id: 1, name: 'สมชาย ใจดี' });
    expect(response.body.every(user => !('email' in user))).toBe(true);
  });
  test('user request history returns only requests owned by that user', async () => {
    const response = await request(app).get('/api/users/1/requests').expect(200);
    expect(response.body.map(row => row.id)).toEqual(['REQ-001', 'REQ-004', 'REQ-007']);
    await request(app).get('/api/users/999/requests').expect(200, []);
  });
  test('unknown API routes return a JSON 404', async () => {
    const response = await request(app).get('/api/missing').expect(404);
    expect(response.body.error).toContain('GET /api/missing');
  });
  test('malformed JSON returns a JSON 400', async () => {
    const response = await request(app).post('/api/requests')
      .set('Content-Type', 'application/json').send('{"broken":').expect(400);
    expect(response.type).toMatch(/json/);
    expect(response.body.error).toBeTruthy();
  });
  test('API discovery and development root explain where to find the frontend', async () => {
    expect((await request(app).get('/api').expect(200)).body.version).toBe('3.0.0');
    expect((await request(app).get('/').expect(200)).body.api).toBe('/api');
  });
  test('failed insert rolls back both the request and its newly created user', () => {
    const requestsBefore = findAll().length;
    const usersBefore = findAllUsers().length;
    expect(() => create({requesterName: 'Rollback User', requestType: 'แจ้งซ่อม', location: '301', details: 'valid details here', priority: 'invalid'})).toThrow();
    expect(findAll()).toHaveLength(requestsBefore);
    expect(findAllUsers()).toHaveLength(usersBefore);
  });
});
