# แผนสาธิต — ยังไม่ได้อัดวิดีโอ
เจ้าของงานต้องอัดวิดีโอด้วยตนเองและเติมลิงก์จริงก่อนส่ง A4
1. เปิด Dashboard แล้วกรองสถานะ
2. เพิ่มคำร้องและเปิดรายละเอียด จากนั้นลบผ่าน Dashboard; เปลี่ยนสถานะด้วย PUT API ใน PowerShell (หน้า Detail ปัจจุบันอ่านข้อมูลอย่างเดียว)
3. ปิด API แสดง error แล้วเปิดกลับและ retry
4. เปิด production ที่พอร์ตเดียวและ /api/health
5. ชี้ controller/service/SQL JOIN และ parameterized query
6. อธิบาย SQLite เทียบ NoSQL และเหตุผลที่ network client ต้อง async
สถานะ: ยังไม่มีไฟล์วิดีโอหรือลิงก์สาธิต ไม่ถือว่า CP42 เสร็จเพียงเพราะมีไฟล์นี้

ตัวอย่างอธิบาย PUT: route รับรหัสและ status → validator ยอมรับ pending/in-progress/completed → service UPDATE ด้วย parameterized query → กลับไป Dashboard แล้ว reload ดูสถานะใหม่
