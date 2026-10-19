// Each app owns its limiter. Failed attempts are scoped to IP + normalized email.
// The in-memory window resets when this single-instance LAB server restarts.
export function createLoginLimiter({ now = Date.now, windowMs = 15 * 60_000, maxFailures = 5 } = {}) {
  const attempts = new Map();
  return (req, res, next) => {
    const time = now();
    for (const [key, attempt] of attempts) {
      if (attempt.expiresAt <= time) attempts.delete(key);
    }
    const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
    const key = `${req.ip}\0${email}`;
    const attempt = attempts.get(key);
    if (attempt?.failures >= maxFailures) {
      res.set('Retry-After', String(Math.max(1, Math.ceil((attempt.expiresAt - time) / 1000))));
      return res.status(429).json({ error: 'เข้าสู่ระบบผิดหลายครั้ง กรุณาลองใหม่ภายหลัง' });
    }
    res.once('finish', () => {
      if (res.statusCode === 200) attempts.delete(key);
      if (res.statusCode === 401) {
        const current = attempts.get(key);
        if (current && current.expiresAt > now()) current.failures += 1;
        else attempts.set(key, { failures: 1, expiresAt: now() + windowMs });
      }
    });
    next();
  };
}
