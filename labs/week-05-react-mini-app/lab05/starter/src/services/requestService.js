import { clearStoredRequests, readStoredRequests, writeStoredRequests } from './requestStorage.js';

const LAB_DELAY_MS = 420;

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForLabDelay() {
  await delay(globalThis.__ENGSE203_SKIP_DELAY__ ? 0 : LAB_DELAY_MS);
}

async function fetchSeedRequests() {
  const baseUrl = import.meta.env?.BASE_URL || '/';
  const response = await fetch(`${baseUrl}data/initialRequests.json`);
  if (!response.ok) {
    throw new Error('ไม่สามารถโหลดข้อมูลเริ่มต้นจากระบบได้');
  }
  const data = await response.json();
  return structuredClone(data);
}

async function loadNormalRequests(onRecovery) {
  const stored = readStoredRequests();

  if (stored.status === 'valid') {
    return stored.requests;
  }

  const seed = await fetchSeedRequests();
  writeStoredRequests(seed);

  if (stored.status === 'invalid') {
    onRecovery?.('พบข้อมูลเดิมที่อ่านไม่ได้ ระบบจึงกู้ข้อมูลตัวอย่างให้แล้ว');
  }

  return seed;
}

export async function getRequests(options = {}) {
  await waitForLabDelay();

  if (options.scenario === 'error') {
    throw new Error('LAB scenario: จำลองการโหลดข้อมูลไม่สำเร็จ');
  }
  if (options.scenario === 'empty') {
    return [];
  }

  return loadNormalRequests(options.onRecovery);
}

export async function getRequestById(requestId) {
  const requests = await getRequests();
  const found = requests.find((req) => req.id === requestId);
  return found ? structuredClone(found) : null;
}

export async function addRequest(requestInput) {
  if (
    !requestInput
    || typeof requestInput.requesterName !== 'string'
    || requestInput.requesterName.trim().length < 2
    || typeof requestInput.requestType !== 'string'
    || !requestInput.requestType.trim()
    || typeof requestInput.location !== 'string'
    || !requestInput.location.trim()
    || typeof requestInput.details !== 'string'
    || requestInput.details.trim().length < 10
    || !['normal', 'urgent'].includes(requestInput.priority)
  ) {
    throw new Error('ข้อมูลคำร้องไม่ครบถ้วนหรือไม่ถูกต้องตามเกณฑ์');
  }

  const requests = await getRequests();

  const newId = `REQ-${Date.now()}`;
  const newRequest = {
    id: newId,
    requesterName: requestInput.requesterName.trim(),
    requestType: requestInput.requestType.trim(),
    location: requestInput.location.trim(),
    details: requestInput.details.trim(),
    priority: requestInput.priority,
    status: 'pending',
  };

  const updatedRequests = [newRequest, ...requests];
  writeStoredRequests(updatedRequests);

  return structuredClone(newRequest);
}

export async function deleteRequest(requestId) {
  const requests = await getRequests();
  const updatedRequests = requests.filter((req) => req.id !== requestId);
  writeStoredRequests(updatedRequests);
  return updatedRequests; 
}

export async function resetRequests() {
  clearStoredRequests();
  const seed = await fetchSeedRequests();
  writeStoredRequests(seed);
  return structuredClone(seed);
}