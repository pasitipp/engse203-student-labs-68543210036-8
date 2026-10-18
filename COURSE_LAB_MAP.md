# แผนการเรียน → LAB → branch / PR

ตรวจจาก [แผนรายวิชาของผู้สอน](https://se-rmutl.github.io/engse203/#roadmap) และ [starter รายสัปดาห์](https://github.com/se-rmutl/engse203-lab/tree/main/labs) วันที่ 18 ตุลาคม 2569

ใช้เลข week-NN ของ roadmap และ starter: Week08 เป็นสอบกลางภาค ไม่ใช่ LAB ปกติ; มี LAB01–07 และ LAB09–13 รวม 12 งาน
หน้า workshops มีป้ายกลุ่ม LAB8–9 สำหรับช่วงฐานข้อมูล แต่ roadmap ระบุ Week09–10 และลิงก์ starter ใช้ week-09 / week-10 จึงยึดชื่อโฟลเดอร์ starter เพื่อส่งงานตรงกัน

| Week | การประเมิน | งาน | Branch | PR เฉพาะ LAB |
|---|---|---|---|---|
| 01 | A2 Weekly LAB | Developer Environment & GitHub Repository Setup | [lab/week-01](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-01) | [#9](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/9) |
| 02 | A2 Weekly LAB | Modern JavaScript Learning Dashboard | [lab/week-02](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-02) | [#10](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/10) |
| 03 | A2 Weekly LAB | Responsive Web UI & Form Interaction | [lab/week-03](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-03) | [#11](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/11) |
| 04 | A2 Weekly LAB | React Campus Service Request | [lab/week-04](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-04) | [#12](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/12) |
| 05 | A2 Weekly LAB | React Routing, Data Fetching and Persistent Mini App | [lab/week-05](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-05) | [#13](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/13) |
| 06 | A2 Weekly LAB | Node.js / Express API Foundation | [lab/week-06](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-06) | [#14](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/14) |
| 07 | A2 Weekly LAB | RESTful API, Validation and Error Handling | [lab/week-07](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-07) | [#15](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/15) |
| 09 | A2 Weekly LAB | Relational Database and SQL (SQLite) | [lab/week-09](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-09) | [#16](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/16) |
| 10 | A2 Weekly LAB | Node.js Database Integration (node:sqlite) | [lab/week-10](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-10) | [#17](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/17) |
| 11 | A4 Full-Stack | Production and Full-Stack Integration | [lab/week-11](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-11) | [#18](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/18) |
| 12 | A2 Weekly LAB | Software Testing and Debugging | [lab/week-12](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-12) | [#19](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/19) |
| 13 | A5 Quality/Security | Quality & Security: Authentication, Authorization and Hardening | [lab/week-13](https://github.com/pasitipp/engse203-student-labs-68543210036-8/tree/lab/week-13) | [#20](https://github.com/pasitipp/engse203-student-labs-68543210036-8/pull/20) |

Week11 เป็น A4 งานบูรณาการรายบุคคล; Week13 อยู่ใน A5 งานคุณภาพ/ความปลอดภัย ไม่ได้รวมทุกอย่างเป็น A2
Week14–16 เป็น Final Term Project แยกจาก repo LAB นี้ และยังอยู่ภายใต้เงื่อนไข Approved ก่อน deploy ที่ผู้สอนกำหนด

## ขอบเขต PR

แต่ละ PR เปลี่ยนเฉพาะ labs/week-NN/, docs/labs/week-NN/ และ .github/workflows/lab-NN.yml ของตัวเอง
PR #8 เปลี่ยนเฉพาะหน้า Portfolio, shared tooling และเอกสารลิงก์ ไม่มีการแก้ labs/ รวมอยู่ใน diff
CI ของแต่ละ LAB ตรวจ source ของ LAB นั้นเอง ส่วน CI Portfolio ตรวจการ์ดและ asset/link ของหน้าเว็บ

## ก่อนส่ง

1. Review งานใน PR ของแต่ละ LAB แยกกัน และทำหลักฐานส่วนตัวที่ค้างตามโจทย์
2. ตรวจ CI แล้ว merge LAB ทีละ PR เมื่อพร้อม
3. Review/merge Portfolio PR #8 สำหรับ index/config/shared verification และลิงก์รวม จากนั้น rebuild/verify บน main ที่รวมทุก LAB แล้ว
4. ตรวจ Pages ใน Incognito และส่ง PR/tag ตาม workflow ของผู้สอน ห้ามย้าย tag เดิมให้ชี้คนละงาน

LAB11 ยังรอวิดีโอของผู้จัดทำ; LAB05 ยังรอคู่ทดสอบและ NOT RUN cases จึงไม่ได้อ้างว่าส่งครบหรือคะแนนเต็มแล้ว

## ผลตรวจ branch แยก

CI ผ่านทั้ง 12 PR บน commit ของแต่ละ branch แล้ว ดู LAB_PR_STATUS.json ซึ่งบันทึก commit และลิงก์ CI จริง ขอบเขต diff ทุก PR ตรวจจาก GitHub API แล้วว่าไม่แตะ LAB อื่น
