import TaskCard from './TaskCard.jsx';

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state" role="status">
        <h3>ยังไม่มีรายการในสถานะนี้</h3>
        <p>ลองเปลี่ยนตัวกรองหรือเพิ่มงานใหม่</p>
      </div>
    );
  }

  const resultText = tasks.length === 1 ? 'พบ 1 รายการ' : `พบ ${tasks.length} รายการ`;

  return (
    <div className="task-list">
      <p><strong>{resultText}</strong></p>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;