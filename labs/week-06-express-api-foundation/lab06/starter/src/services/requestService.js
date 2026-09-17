import { readFile, writeFile } from 'node:fs/promises';

const SEED_PATH = new URL('../../data/initialRequests.json', import.meta.url);
const DATA_PATH = new URL('../../data/requests.json', import.meta.url);

let requests = [];

export async function loadSeed() {
  try {
    const raw = await readFile(DATA_PATH, 'utf8');
    requests = JSON.parse(raw);
  } catch {
    const raw = await readFile(SEED_PATH, 'utf8');
    requests = JSON.parse(raw);
    await persist();
  }
  return requests;
}

async function persist() {
  await writeFile(DATA_PATH, JSON.stringify(requests, null, 2), 'utf8');
}

export function findAll({ status } = {}) {
  if (!status) return structuredClone(requests);
  return structuredClone(requests.filter((r) => r.status === status));
}

export function findById(id) {
  const found = requests.find((r) => r.id === id);
  return found ? structuredClone(found) : null;
}

function createId() {
  let id;
  do {
    const time = Date.now().toString(36).toUpperCase();
    const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
    id = `REQ-${time}-${rand}`;
  } while (requests.some((r) => r.id === id));
  return id;
}

export async function create(input) {
  const newRequest = {
    id: createId(),
    requesterName: input.requesterName.trim(),
    requestType: input.requestType,
    location: input.location.trim(),
    details: input.details.trim(),
    priority: input.priority,
    status: 'pending',
  };
  requests.push(newRequest);
  await persist();
  return structuredClone(newRequest);
}

export async function updateStatus(id, status) {
  const index = requests.findIndex((r) => r.id === id);
  if (index === -1) return null;
  requests[index].status = status;
  await persist();
  return structuredClone(requests[index]);
}

export async function remove(id) {
  const before = requests.length;
  requests = requests.filter((r) => r.id !== id);
  if (requests.length < before) {
    await persist();
    return true;
  }
  return false;
}