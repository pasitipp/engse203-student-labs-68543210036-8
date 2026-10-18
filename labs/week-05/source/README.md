# LAB05 — Campus Service Request

ผู้จัดทำ นายพสิษฐิ์ เพชรอำพันธุ์ 68543210036-8

React + HashRouter มี Dashboard, New Request, Detail, About และ NotFound; page เรียก service, service อ่าน seed JSON และ requestStorage จัดการ localStorage แบบมี schemaVersion

ใช้ npm ci, npm run dev, npm run check และ npm run build ในโฟลเดอร์นี้

รองรับ loading/error/empty, retry, validation, add/delete/reset และ recovery เมื่อ storage เสีย

ผล checker 136/136 และ build ผ่าน ดู ../evidence/ ซึ่งรวมภาพเบราว์เซอร์จริง 11 ภาพและ TEST_REPORT.md (แยก PASS / NOT RUN)

REGRESSION_CHECKLIST.md ต้องให้เพื่อนทดสอบและกรอกเอง; ยังไม่ได้ระบุว่าจับคู่เสร็จแล้ว

เริ่มจาก starter ของผู้สอน 3e080d3 และ component จากงานเดิม LAB13 ของตนเอง ดู AI_USAGE.md; ห้ามใส่รหัสผ่าน/token หรือข้อมูลส่วนบุคคลจริงลง storage
