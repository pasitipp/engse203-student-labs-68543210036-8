import { useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import SummaryPanel from './components/SummaryPanel.jsx';
import FilterBar from './components/FilterBar.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import { initialTasks } from './data/initialTasks.js';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [statusFilter, setStatusFilter] = useState('all');

  const summary = {
    total: tasks.length,
    todo: tasks.filter((task) => task.status === 'todo').length,
    doing: tasks.filter((task) => task.status === 'doing').length,
    done: tasks.filter((task) => task.status === 'done').length,
  };
  
  const filteredTasks = statusFilter === 'all'
    ? tasks
    : tasks.filter((task) => task.status === statusFilter);

  function handleAddTask(taskData) {
    const newTask = {
      id: `TASK-${Date.now()}`,
      ...taskData,
      status: 'todo',
    };
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  const handleDeleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter(t => t.id !== taskId));
  };

  return (
    <>
      <AppHeader title="Study Task Board" subtitle="ฝึก React mental model ก่อนประยุกต์กับ Campus Service Request" />
      <main className="container page-content">
        <SummaryPanel summary={summary} />
        
        <div className="layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>
          <TaskForm onAddTask={handleAddTask} />
          
          <section className="panel" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
              <div>
                <span className="eyebrow" style={{color: '#1768c4', fontSize: '0.75rem', fontWeight: 'bold'}}>TASKS</span>
                <h2 style={{marginTop: '0.25rem'}}>รายการฝึกของฉัน</h2>
              </div>
              <FilterBar value={statusFilter} onFilterChange={setStatusFilter} />
            </div>
            
            <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;