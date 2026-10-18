# Browser smoke test — 18 Oct 2026

ทดสอบโดย Codex บน local built output ผ่าน in-app browser

- PASS โหลด seed 6 รายการ สรุป total=6, todo=4, doing=1, done=1 (success-browser.jpg)
- PASS พิมพ์คำค้นที่ไม่มีอยู่แล้วแสดงไม่พบรายการ (filter-empty-browser.jpg)
- PASS ?simulateError=1 แสดงข้อความ error โดยไม่แสดง stack trace (error-browser.jpg)

ยังไม่ได้ทดสอบ manual cases ทั้งหมด/Pages หลัง merge ภาพนี้เป็นการทดสอบ local ไม่ใช่ภาพจากห้องเรียน
