# เปิด LAB ในเครื่อง (PowerShell)

เริ่มจาก repository root ใช้ Node.js 24 และ `node scripts/install-lab-deps.mjs` หนึ่งครั้ง

## LAB01–05

LAB01: `npm.cmd start --prefix labs/week-01/source`

LAB02–05: เปลี่ยน NN แล้วรัน `npm.cmd run dev --prefix labs/week-NN/source`; เปิด URL ที่ Vite แสดง

## LAB06

`npm.cmd start --prefix labs/week-06/source` แล้วทดสอบ `/api/requests` ที่พอร์ตที่ terminal แสดง

## LAB07 และ 10–13

เปลี่ยน NN เป็นสัปดาห์ที่ต้องการ และใช้คนละ terminal สำหรับ API / frontend

```powershell
Copy-Item labs/week-NN/source/api/.env.example labs/week-NN/source/api/.env
# LAB13 ต้องใส่ JWT_SECRET แบบสุ่มใน .env ของเครื่องตนเอง (อย่า commit)
# LAB10–13 สร้าง DB ก่อนเปิดครั้งแรก
npm.cmd run db:setup --prefix labs/week-NN/source/api
npm.cmd run dev --prefix labs/week-NN/source/api
```

อีก terminal: `npm.cmd run dev --prefix labs/week-NN/source/frontend`

LAB07 ไม่มี db:setup (ยังไม่ใช้ SQLite) ให้ข้ามคำสั่งนั้น
ถ้าพอร์ตชนให้ปิด LAB เดิมก่อน เปิดทีละสัปดาห์
LAB13 ใช้ register/login; บัญชี requester แก้หรือลบไม่ได้ (403) ให้สร้าง staff ผ่านคำสั่ง create-staff ตาม README ของ LAB13

## LAB09

เปิด campus.db ด้วย SQLite extension หรือใช้ Node.js node:sqlite; รัน queries.sql ทีละคำสั่ง ดู DATA_MODEL.md และ evidence/sql-results.txt
schema.sql ใช้ล้างแล้วสร้างฐานทดลองใหม่ ต้องไม่รันกับฐานข้อมูลจริง

## LAB11 จำลอง production

```powershell
Set-Location labs/week-11/source
npm.cmd ci
npm.cmd run build
$env:NODE_ENV='production'
npm.cmd start
```

เปิด http://localhost:3001 และ http://localhost:3001/api/health บนพอร์ตเดียวกัน
หลังหยุด server ให้ `Remove-Item Env:NODE_ENV` เมื่อต้องการกลับไป dev
render.yaml เป็น config สำหรับศึกษา ยังไม่ได้สร้าง cloud service

## Portfolio

`npm.cmd run build:pages` สร้าง docs/ จาก publish/ และ metadata โดยห้ามแก้ docs/ ด้วยมือ
GitHub Pages เดิมของ repo ใช้ main /docs; push feature branch อย่างเดียวยังไม่เปลี่ยนเว็บที่ออนไลน์
LAB API/SQL แสดง evidence report เพราะ Pages รัน Express/SQLite ไม่ได้
