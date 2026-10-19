import { Router } from 'express';
import * as authService from '../services/authService.js';
import { validateLoginInput } from '../validators/requestValidator.js';
import { createLoginLimiter } from '../middleware/loginLimiter.js';

// route ให้มาแล้ว — งานหลักอยู่ใน services/authService.js (CP50)
export default function createAuthRoutes(limiterOptions) {
const router = Router();
router.use('/login', createLoginLimiter(limiterOptions));

router.post('/login', (req, res) => {
  const errors = validateLoginInput(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ error: 'ข้อมูลเข้าสู่ระบบไม่ถูกต้อง', details: errors });
  }
  const result = authService.login(req.body.email, req.body.password);
  if (!result) {
    return res.status(401).json({ error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
  }
  res.status(200).json(result);
});

return router;
}
