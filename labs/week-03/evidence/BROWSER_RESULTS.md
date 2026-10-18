# Browser smoke test — 18 Oct 2026

- PASS เปิดหน้าแบบฟอร์มและ preview (desktop-browser.jpg)
- PASS submit ฟอร์มเปล่าแล้วแสดง error ใต้ช่องและยังไม่เพิ่มรายการ (invalid-browser.jpg)
- PASS กรอกครบแล้วเพิ่มผู้ทดสอบ LAB03 ใน Submitted Requests; ฟอร์ม reset และขึ้นบันทึกสำเร็จ (valid-browser.jpg)
- พบ bug mobile: body min-width 375px ทำให้ scrollWidth 375 > clientWidth 360 เมื่อมี scrollbar
- FIX ลด min-width เป็น 320px; rebuild แล้วทดสอบ viewport 375px: scrollWidth=clientWidth=360 ไม่มี overflow (mobile-browser.jpg)

ผู้ทดสอบ: Codex, local built output; ยังไม่อ้างว่า manual/keyboard/Pages ทั้งหมดครบแล้ว
