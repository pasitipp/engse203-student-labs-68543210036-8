# LAB13 — Quality & Security: Authentication, Authorization and Hardening

นายพสิษฐิ์ เพชรอำพันธุ์ · 68543210036-8 · SEC2

Branch: `lab/week-13` — PR นี้เปลี่ยนเฉพาะ LAB13, output ของ LAB เดียวกัน และ CI ของ LAB นี้

Source: [source/](source/) · Evidence: [evidence/](evidence/) · Output/report: [publish/](publish/)

## รันและตรวจ LAB นี้แยกต่างหาก

ใช้ Node.js 24 แล้วรันจาก repository root:

~~~powershell
Set-Location labs/week-13/source
npm.cmd ci
npm.cmd ci --prefix api
npm.cmd ci --prefix frontend
npm.cmd run build --prefix frontend
npm.cmd test --prefix api
npm.cmd test --prefix frontend
node --disable-warning=ExperimentalWarning check-week13.mjs --inclass
~~~

ดู source/README.md และ package.json สำหรับการเปิด dev/API; ใช้ .env.example สร้าง .env ในเครื่องเท่านั้น ห้าม commit secret

ผลที่แนบใน evidence/ มาจากการรันจริงบนโค้ดต้นทาง 90d044f; CI ของ PR นี้จะตรวจ LAB นี้ซ้ำแยกต่างหาก ไม่ได้ยืนยันหลักฐานส่วนตัวครบแล้ว

แผนการเรียน: https://se-rmutl.github.io/engse203/#roadmap
โจทย์จริง: ดู starter ของสัปดาห์นี้ใน https://github.com/se-rmutl/engse203-lab/tree/main/labs

การรวมลิงก์ทั้งรายวิชาอยู่ใน Portfolio PR แยก ไม่ได้รวม source ของทุก LAB ไว้ใน PR นี้
