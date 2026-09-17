export const STORAGE_KEY = 'engse203-campus-requests-v1';
export const SCHEMA_VERSION = 1;

const priorities = new Set(['normal', 'urgent']);
const statuses = new Set(['pending', 'in-progress', 'completed']);

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidRequest(request) {
  return Boolean(
    request
      && isNonEmptyString(request.id)
      && request.id.startsWith('REQ-')
      && typeof request.requesterName === 'string'
      && request.requesterName.trim().length >= 2
      && isNonEmptyString(request.requestType)
      && isNonEmptyString(request.location)
      && typeof request.details === 'string'
      && request.details.trim().length >= 10
      && priorities.has(request.priority)
      && statuses.has(request.status),
  );
}

function validateRequests(requests) {
  if (!Array.isArray(requests) || !requests.every(isValidRequest)) return false;
  return new Set(requests.map((request) => request.id)).size === requests.length;
}

export function readStoredRequests() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    return { status: 'missing' };
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { status: 'invalid', reason: 'ไม่ใช่ JSON ที่อ่านได้' };
  }

  if (
    !parsed
    || typeof parsed !== 'object'
    || parsed.schemaVersion !== SCHEMA_VERSION
    || !validateRequests(parsed.requests)
  ) {
    return { status: 'invalid', reason: 'รูปแบบข้อมูลหรือเวอร์ชันไม่ถูกต้อง' };
  }

  return {
    status: 'valid',
    requests: structuredClone(parsed.requests),
  };
}

export function writeStoredRequests(requests) {
  if (!validateRequests(requests)) {
    throw new Error('ข้อมูล requests ไม่ถูกต้องตามเกณฑ์ validation');
  }

  const envelope = {
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    requests,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
}

export function clearStoredRequests() {
  localStorage.removeItem(STORAGE_KEY);
}