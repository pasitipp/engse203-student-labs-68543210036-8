# รายการก่อนส่ง LAB

เจ้าของงาน: นายพสิษฐิ์ เพชรอำพันธุ์ (Pasit Petoumphun) · 68543210036-8 · SEC2

หน้า Portfolio แสดง 12 LAB: 01–07 และ 09–13; Week08 เป็นสอบกลางภาค

## สิ่งที่เตรียมแล้ว

- [x] เติม source LAB05–07 และ 09–12 โดยเริ่มจาก starter ผู้สอนและงานเดิมของตนเอง
- [x] ตรวจ LAB01–04 และ LAB13 ที่มีอยู่ พร้อมแก้ checker/path/build ที่ผิด
- [x] บันทึก checker logs ของ 12 LAB และผล build/test ที่รันจริงใน evidence/
- [x] จัดหน้า Portfolio พร้อม Source และผลลัพธ์แต่ละ LAB
- [x] เก็บภาพ LAB05 จากเบราว์เซอร์จริง รวมฟอร์ม, reload, ลบ, filter, error, retry, empty, not found และหน้าจอมือถือ
- [x] เตรียม DEMO.md สำหรับอัดวิดีโอ LAB11

## สิ่งที่คุณต้องทำเอง

- [ ] อ่าน source และฝึกอธิบาย route → controller → service → SQLite/Storage และเหตุผลของแต่ละ test
- [ ] LAB05 ให้เพื่อนเป็นผู้ทดสอบและกรอก REGRESSION_CHECKLIST.md จริง (11 ข้อ); ช่วยกันบันทึกช่องที่ยัง NOT RUN ใน TEST_REPORT.md
- [ ] ตรวจหลักฐานส่วนตัวตามโจทย์ราย LAB: ภาพจาก VS Code, DevTools/CORS, SQL และคำตอบสะท้อนการเรียนรู้ หากผู้สอนกำหนด
- [ ] LAB11 อัดวิดีโอด้วยเสียงของตนเอง แล้วส่ง URL เพื่อใส่ใน source/DEMO.md
- [x] Push branch labs/complete-01-13 และเปิด Draft PR #8: https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/8
- [ ] Review PR #8 แล้ว merge เมื่อเห็นว่าตรงกับงานและอธิบายได้
- [ ] ตรวจ GitHub Pages หลัง merge ว่ามี 12 การ์ดและลิงก์เปิดได้
- [ ] จัด weekly PR / submission tag ตามรูปแบบที่ผู้สอนรับ ตรวจ tag เดิมก่อน ห้ามย้าย tag เก่าให้ชี้คนละงาน
- [ ] ส่งลิงก์ Portfolio, ผลราย LAB, PR และ tag ในช่องทางผู้สอน

ผลตรวจอัตโนมัติผ่านไม่ได้ยืนยันคะแนนเต็มหรือยืนยันว่าเคยทำกิจกรรมในคาบแล้ว ต้องให้ผู้สอนตรวจหลักฐานและการอธิบายงานด้วย

## เปิดทดสอบในเครื่อง

ใช้ Node.js 24 LTS (node:sqlite ต้องใช้รุ่นที่รองรับ) และอ่าน HOW_TO_RUN.md

```powershell
node scripts/install-lab-deps.mjs
node scripts/build-lab-output.mjs
node scripts/check-labs.mjs
node scripts/prepare-portfolio.mjs
npm.cmd run build:pages
npm.cmd run verify
```

ตัวตรวจ root ปรับให้ดูไฟล์ที่ Git จะนำขึ้นจริง จึงไม่เตือน node_modules ที่ถูก ignore และยอมรับเฉพาะ frontend/.env.production ที่มี VITE_API_BASE_URL ว่าง ไม่มี secret ส่วน checker ราย LAB ใช้ของอาจารย์ (LAB04 แก้เฉพาะการแปลง Windows file URL)

## สถานะการเผยแพร่

ผู้จัดทำอนุญาตให้นำงานขึ้น GitHub ในคำขอวันที่ 18 ตุลาคม 2569 งานอยู่บน branch labs/complete-01-13 เปิด Draft PR #8 เพื่อ review แล้ว; GitHub Pages ใช้ main /docs จึงอัปเดตหลัง merge ส่วนวิดีโอและหลักฐานส่วนตัวยังรอดำเนินการตามรายการด้านบน
