function SummaryPanel({ summary }) {
  return (
    <section className="panel" aria-labelledby="summary-title">
      <h2 id="summary-title">ภาพรวม</h2>
      <p>ทั้งหมด: {summary.total} รายการ</p>
      <p>รอดำเนินการ: {summary.todo} | กำลังทำ: {summary.doing} | เสร็จสิ้น: {summary.done}</p>
    </section>
  );
}
export default SummaryPanel;