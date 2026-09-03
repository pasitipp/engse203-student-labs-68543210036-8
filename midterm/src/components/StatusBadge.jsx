function StatusBadge({ status }) {
  switch (status) {
    case 'pending':
      return <span className="badge pending">รอดำเนินการ</span>;
    case 'in-progress':
      return <span className="badge in-progress">กำลังดำเนินการ</span>;
    case 'completed':
      return <span className="badge completed">เสร็จสิ้น</span>;
    default:
      return <span className="status-unknown">ไม่ทราบสถานะ</span>;
  }
}

export default StatusBadge;