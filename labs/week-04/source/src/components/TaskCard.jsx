function TaskCard({ task, onDeleteTask }) {
  const getStatusColor = (status) => {
    if (status === 'todo') return { bg: '#fff4e5', text: '#b27a00' };
    if (status === 'doing') return { bg: '#e5f6fd', text: '#007bb2' };
    if (status === 'done') return { bg: '#edf7ed', text: '#2e7d32' };
    return { bg: '#eee', text: '#333' };
  };

  const statusStyle = getStatusColor(task.status);
  const isImportant = task.priority === 'สำคัญ';

  return (
    <article className="task-card" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #eee', borderRadius: '12px', marginBottom: '1rem'}}>
      <div>
        <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.5rem'}}>
          <span style={{backgroundColor: statusStyle.bg, color: statusStyle.text, padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold'}}>
            {task.status === 'todo' ? 'ต้องทำ' : task.status === 'doing' ? 'กำลังทำ' : 'เสร็จแล้ว'}
          </span>
          {isImportant && (
            <span style={{backgroundColor: '#fce4e4', color: '#c62828', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold'}}>
              สำคัญ
            </span>
          )}
        </div>
        <h3 style={{margin: '0 0 0.25rem 0', fontSize: '1rem'}}>{task.title}</h3>
        <p style={{margin: '0', fontSize: '0.85rem', color: '#666'}}>{task.category}</p>
      </div>
      <button 
        type="button" 
        onClick={() => onDeleteTask(task.id)}
        style={{backgroundColor: '#fce4e4', color: '#c62828', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}
      >
        ลบ
      </button>
    </article>
  );
}

export default TaskCard;