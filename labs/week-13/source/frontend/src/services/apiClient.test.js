import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { apiFetch, ApiError, clearAccessToken, login, setAccessToken } from './apiClient.js';

beforeEach(() => { clearAccessToken(); vi.stubGlobal('fetch', vi.fn()); });
afterEach(() => vi.unstubAllGlobals());
const json = (value, status = 200) => new Response(JSON.stringify(value), {
  status, headers: { 'Content-Type': 'application/json' },
});
test('successful login attaches the returned token to subsequent API requests', async () => {
  fetch.mockResolvedValueOnce(json({ token: 'test-session', user: { role: 'staff' } })).mockResolvedValueOnce(json([]));
  expect(await login('staff@example.org', 'test-password')).toEqual({ role: 'staff' });
  await apiFetch('/api/requests');
  expect(fetch.mock.calls[0][1].headers.has('Authorization')).toBe(false);
  expect(fetch.mock.calls[1][1].headers.get('Authorization')).toBe('Bearer test-session');
});
test('custom request headers survive merging with authorization', async () => {
  setAccessToken('session'); fetch.mockResolvedValue(json({}));
  await apiFetch('/api/requests', { headers: { 'X-Request-ID': 'case-1' } });
  const headers = fetch.mock.calls[0][1].headers;
  expect(headers.get('X-Request-ID')).toBe('case-1');
  expect(headers.get('Content-Type')).toBe('application/json');
  expect(headers.get('Authorization')).toBe('Bearer session');
});
test('401 clears the expired token before the next request', async () => {
  setAccessToken('expired'); fetch.mockResolvedValueOnce(json({ error: 'expired' }, 401)).mockResolvedValueOnce(json([]));
  await expect(apiFetch('/api/requests')).rejects.toMatchObject({ status: 401 });
  await apiFetch('/api/requests');
  expect(fetch.mock.calls[1][1].headers.has('Authorization')).toBe(false);
});
test('logout clears authentication and 204 returns null', async () => {
  setAccessToken('session'); clearAccessToken(); fetch.mockResolvedValue(new Response(null, { status: 204 }));
  expect(await apiFetch('/api/requests/REQ-1', { method: 'DELETE' })).toBeNull();
  expect(fetch.mock.calls[0][1].headers.has('Authorization')).toBe(false);
});
test('failed sign-in clears an earlier session instead of retaining another account', async () => {
  setAccessToken('old'); fetch.mockResolvedValue(json({ error: 'wrong password' }, 401));
  await expect(login('new@example.org', 'bad-password')).rejects.toBeInstanceOf(ApiError);
  expect(fetch.mock.calls[0][1].headers.has('Authorization')).toBe(false);
});
test('network and non-JSON errors remain understandable API errors', async () => {
  fetch.mockRejectedValueOnce(new TypeError('offline'));
  await expect(apiFetch('/api/requests')).rejects.toMatchObject({ status: 0 });
  fetch.mockResolvedValueOnce(new Response('unavailable', { status: 503 }));
  await expect(apiFetch('/api/requests')).rejects.toMatchObject({ status: 503 });
});
