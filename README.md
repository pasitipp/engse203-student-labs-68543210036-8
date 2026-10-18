# ENGSE203 LAB Portfolio

นายพสิษฐิ์ เพชรอำพันธุ์ · Pasit Petoumphun · 68543210036-8 · SEC2
GitHub: pasitipp · email: kimm122547@gmail.com

แยกงานทุก LAB เป็น branch และ PR ของตัวเอง ดู [แผนและลิงก์ราย LAB](COURSE_LAB_MAP.md)

- LAB01–07 และ LAB09–13 รวม 12 งาน; Week08 สอบกลางภาค
- Branch: lab/week-NN (แต่ละ PR มีเฉพาะ LAB ของตัวเองและ CI/output ที่เกี่ยวข้อง)
- Portfolio PR #8 รวมเฉพาะหน้าแสดงผล ลิงก์ และ shared tooling
- Source/tests ของแต่ละ LAB อยู่ใน PR #9–#20

[Portfolio](https://pasitipp.github.io/engse203-student-labs-68543210036-8/) · [สิ่งที่ต้องทำก่อนส่ง](STUDENT_NEXT_STEPS.md) · [วิธีรัน](HOW_TO_RUN.md)

## ตรวจงานแยก LAB

เปิด branch ที่ต้องการ แล้วอ่าน labs/week-NN/README.md; CI .github/workflows/lab-NN.yml ติดตั้งและตรวจ LAB นั้นเอง ใช้ Node.js 24
โค้ดที่แยกมาจาก snapshot 90d044f ซึ่งผ่าน build/tests/checkers แล้ว มี logs และภาพจริงใน evidence/; CI ราย PR ตรวจซ้ำอีกครั้ง

## Portfolio / หลังรวม PR

Portfolio แสดง 12 การ์ดและชี้ Source/PR แยกกันทั้งหมด API/SQLite LAB แสดง evidence report เพราะ GitHub Pages รัน Express/SQLite ไม่ได้
หลัง merge LAB ต่าง ๆ และ shared tooling ของ PR #8 แล้วจึงรันคำสั่งรวมบน main:

~~~powershell
node scripts/install-lab-deps.mjs
node scripts/build-lab-output.mjs
node scripts/check-labs.mjs
node scripts/prepare-portfolio.mjs
npm.cmd run build:pages
npm.cmd run verify
~~~

ห้ามแก้ docs/ ด้วยมือ; สร้างจาก metadata/publish ของ LAB ที่รวมแล้ว
ก่อนรวมครบสามารถตรวจ artifact Portfolio ด้วย node scripts/verify-portfolio.mjs

## หลักฐานและการใช้ AI

ใช้ starter ของผู้สอนและงานเดิมของตนเอง; Codex ช่วย implementation, testing และจัด branch/PR ดู AI_USAGE.md ในแต่ละ LAB
ยังไม่อ้างว่าผู้จัดทำอัดวิดีโอ LAB11, ทำ paired regression หรือเข้าใจ/อธิบายโค้ดครบแล้ว ต้องทำด้วยตนเองก่อนส่ง
ไม่มีการย้าย submission tags เก่าหรือเปลี่ยนวัน commit ย้อนหลัง
