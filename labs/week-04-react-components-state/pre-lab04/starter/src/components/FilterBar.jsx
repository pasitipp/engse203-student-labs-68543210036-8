function FilterBar({ statusFilter, onFilterChange }) {
  return (
    <section className="panel">
      <label htmlFor="status-filter">ตัวกรองสถานะ: </label>
      <select 
        id="status-filter" 
        value={statusFilter} 
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value="all">ทั้งหมด</option>
        <option value="todo">รอดำเนินการ</option>
        <option value="doing">กำลังทำ</option>
        <option value="done">เสร็จสิ้น</option>
      </select>
    </section>
  );
}
export default FilterBar;