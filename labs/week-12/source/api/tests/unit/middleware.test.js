import { afterEach, expect, test, vi } from 'vitest';
import { EventEmitter } from 'node:events';
import { AppError, asyncHandler, errorHandler } from '../../src/middleware/errorHandler.js';
import { logger } from '../../src/middleware/logger.js';

afterEach(() => vi.restoreAllMocks());
test('async route rejection is forwarded to the error handler', async () => {
  const error = new AppError('Unavailable', 503);
  const next = vi.fn();
  await asyncHandler(async () => { throw error; })({}, {}, next);
  expect(next).toHaveBeenCalledWith(error);
});
test('server failures return a generic message rather than internal exception text', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };
  errorHandler(new AppError('private database path'), {}, res, vi.fn());
  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json.mock.calls[0][0].error).not.toContain('private database path');
});
test('request logger waits until completion and reports the method and response status', () => {
  const output = vi.spyOn(console, 'log').mockImplementation(() => {});
  const res = new EventEmitter(); res.statusCode = 204;
  const next = vi.fn();
  logger({ method: 'DELETE', originalUrl: '/api/requests/REQ-001' }, res, next);
  expect(next).toHaveBeenCalledOnce();
  expect(output).not.toHaveBeenCalled();
  res.emit('finish');
  expect(output).toHaveBeenCalledWith(expect.stringContaining('DELETE /api/requests/REQ-001 → 204'));
});
