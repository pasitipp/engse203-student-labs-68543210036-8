# Checklist ผลตรวจ LAB — 18 ตุลาคม 2569

ช่องที่ติ๊กคือสิ่งที่ตรวจพบและรันสำเร็จจริง ไม่ได้หมายถึงส่งครบทุกหลักฐาน

| LAB | Source | Evidence | Publish/report | Metadata | Checker + repository verify |
|---|---|---|---|---|---|
| week-01 | [x] | [x] | [x] | [x] | [x] |
| week-02 | [x] | [x] | [x] | [x] | [x] |
| week-03 | [x] | [x] | [x] | [x] | [x] |
| week-04 | [x] | [x] | [x] | [x] | [x] |
| week-05 | [x] | [x] | [x] | [x] | [x] |
| week-06 | [x] | [x] | [x] | [x] | [x] |
| week-07 | [x] | [x] | [x] | [x] | [x] |
| week-09 | [x] | [x] | [x] | [x] | [x] |
| week-10 | [x] | [x] | [x] | [x] | [x] |
| week-11 | [x] | [x] | [x] | [x] | [x] |
| week-12 | [x] | [x] | [x] | [x] | [x] |
| week-13 | [x] | [x] | [x] | [x] | [x] |

- [x] Build output ของ LAB02–05 และ frontend LAB07,10–13 ผ่าน
- [x] Unit/API/frontend tests ที่กำหนดไว้ผ่าน ดู raw logs ราย LAB
- [x] SQL SELECT และ NOT NULL / UNIQUE / FOREIGN KEY ตรวจจริงผ่าน
- [x] LAB02 ออนไลน์โหลดข้อมูล 6 รายการ ไม่มี Console errors ใน in-app browser
- [x] LAB02 HTML, JS, CSS และ JSON ที่หน้าเว็บใช้ตอบ HTTP 200 (online-assets.json)
- [ ] เปิด GitHub Pages ด้วย Incognito แล้วตรวจ Console/404 ด้วยตนเอง
- [ ] GitHub Actions ของ commit ที่ push ล่าสุดผ่าน (เติมหลังขึ้น Git)
- [ ] Review และ merge PR ใหม่
- [ ] ตรวจ Portfolio ออนไลน์ครบ 12 การ์ดหลัง merge
- [ ] LAB11 วิดีโอเสียงของผู้จัดทำ
- [ ] LAB05 ใบจับคู่ทดสอบจริง และ manual cases ที่ยัง NOT RUN
- [ ] ส่งงานพร้อม weekly PR/tag ตามช่องทางผู้สอน

Incognito: Chrome/Edge กด Ctrl+Shift+N แล้วเปิด Pages URL; F12 → Console ดู error และ Network ดู 404 รีโหลดหนึ่งครั้ง หากผ่านจึงติ๊กข้อ Incognito บน PR

หมายเหตุ: verify:lab มี warning ว่าชื่อ branch รวมงานต่างจาก branch รายสัปดาห์ แต่ตรวจ structure/metadata/pages ผ่าน ไม่ได้เปลี่ยนเงื่อนไขของ checker ราย LAB เพื่อให้ผ่าน
