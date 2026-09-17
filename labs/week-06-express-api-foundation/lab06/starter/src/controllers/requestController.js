import * as service from '../services/requestService.js';

export function listRequests(req, res, next) {
  try {
    const { status } = req.query;
    res.status(200).json(service.findAll({ status }));
  } catch (err) {
    next(err);
  }
}

export function getRequest(req, res, next) {
  try {
    const found = service.findById(req.params.id);
    if (!found) {
      return res.status(404).json({ error: `ไม่พบคำร้องรหัส ${req.params.id}` });
    }
    res.status(200).json(found);
  } catch (err) {
    next(err);
  }
}

export async function createRequest(req, res, next) {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function updateRequestStatus(req, res, next) {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'สถานะไม่ถูกต้อง' });
    }
    const updated = await service.updateStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ error: `ไม่พบคำร้องรหัส ${req.params.id}` });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteRequest(req, res, next) {
  try {
    const removed = await service.remove(req.params.id);
    if (!removed) {
      return res.status(404).json({ error: `ไม่พบคำร้องรหัส ${req.params.id}` });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}