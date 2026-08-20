function TaskCard({ task, onDeleteTask }) {
  return (
    <article className="task-card panel">
      <h3>{task.title}</h3>
      <p>สถานะ: {task.status}</p>
      <button type="button" onClick={() => onDeleteTask(task.id)}>ลบ</button>
    </article>
  );
}
export default TaskCard;