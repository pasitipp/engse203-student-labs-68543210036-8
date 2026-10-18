# ENGSE203 LAB Portfolio

นายพสิษฐิ์ เพชรอำพันธุ์ · Pasit Petoumphun · 68543210036-8 · SEC2
GitHub: pasitipp · email: kimm122547@gmail.com

12 LAB: 01–07 และ 09–13; Week08 เป็นสอบกลางภาค

[Portfolio](https://pasitipp.github.io/engse203-student-labs-68543210036-8/) · [สิ่งที่ต้องทำก่อนส่ง](STUDENT_NEXT_STEPS.md) · [วิธีรัน](HOW_TO_RUN.md)

## ผลตรวจในเครื่อง วันที่ 18 ตุลาคม 2569

| LAB | ผลอัตโนมัติ |
|---|---|
| 01 | greeting CLI และ Node unit test 1/1 |
| 02 | official structure checker + Vite build ผ่าน |
| 03 | JavaScript syntax check + Vite build ผ่าน (ยังต้อง manual UI checks) |
| 04 | official verifier + Vite build ผ่าน |
| 05 | instructor checker 136/136 + build ผ่าน; มีภาพเบราว์เซอร์จริง |
| 06 | checker 28/28 |
| 07 | checker 36/36 + API tests 12/12 + frontend build |
| 09 | checker 30/30 + รัน SELECT และทดสอบ constraints จริง |
| 10 | checker 31/31 + API tests 13/13 + frontend build |
| 11 | checker 41/41 + API tests 14/14 + production build; วิดีโอรออัด |
| 12 | in-class checker 20/20 + API tests 39/39 + frontend tests 3/3 + build |
| 13 | in-class checker 23/23 + API tests 69/69 + frontend tests 3/3 + build |

ดู raw logs ใน labs/week-NN/evidence/ พร้อมวันและคำสั่งที่รัน
ผลอัตโนมัติไม่ได้ยืนยันว่าหลักฐานส่วนตัวหรือการส่งงานครบแล้ว ดูรายการค้างใน STUDENT_NEXT_STEPS.md

## โครงสร้างและ workflow

แต่ละ LAB มี source/, evidence/, publish/ และ lab-metadata.json; docs/ สร้างจาก publish และ metadata ห้ามแก้ด้วยมือ
Pages เดิมใช้ main /docs; branch labs/complete-01-13 เป็นงานเตรียม review ก่อน merge
API/SQL LAB แสดง evidence report บน Pages และต้องเปิดระบบจริงด้วย Node.js ในเครื่อง

คำสั่งตรวจทั้งหมด (อย่ารัน test กับ checker พร้อมกันใน LAB เดียว):

~~~powershell
node scripts/install-lab-deps.mjs
node scripts/build-lab-output.mjs
node scripts/check-labs.mjs
node --disable-warning=ExperimentalWarning scripts/record-sql-evidence.mjs
node scripts/prepare-portfolio.mjs
npm.cmd run build:pages
npm.cmd run verify
~~~

## แหล่งที่มาและการใช้ AI

เริ่มจาก [starter ผู้สอน](https://github.com/se-rmutl/engse203-lab/tree/main/labs) ที่ 3e080d3 และงานเดิมของตนเอง ไม่มีการคัดลอกงานนักศึกษาคนอื่น ดู AI_USAGE.md ในแต่ละ LAB ใหม่
ไม่เปลี่ยนวัน commit ย้อนหลัง ไม่ย้าย submission tag เก่า และไม่สร้างวิดีโอ/กิจกรรมในคาบแทนผู้จัดทำ
