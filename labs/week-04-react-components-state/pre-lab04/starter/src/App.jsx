import { useState } from 'react';
import { initialTasks } from './data/initialTasks.js';
import AppHeader from './components/AppHeader.jsx';
import SummaryPanel from './components/SummaryPanel.jsx';
import FilterBar from './components/FilterBar.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [statusFilter, setStatusFilter] = useState('all');

  const summaryData = {
    total: tasks.length,
    todo: tasks.filter((task) => task.status === 'todo').length,
    doing: tasks.filter((task) => task.status === 'doing').length,
    done: tasks.filter((task) => task.status === 'done').length,
  };

  const filteredTasks = statusFilter === 'all'
    ? tasks
    : tasks.filter((task) => task.status === statusFilter);

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  function handleAddTask(taskData) {
    const newTask = {
      id: `TASK-${Date.now()}`,
      ...taskData,
      status: 'todo',
    };
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  return (
    <>
      <AppHeader 
        title="Study Task Board" 
        subtitle="ฝึก React mental model ก่อนทำ LAB04" 
      />
      
      <main className="container page-content">
        <SummaryPanel summary={summaryData} />
        
        <TaskForm onAddTask={handleAddTask} />
        
        <FilterBar 
          statusFilter={statusFilter} 
          onFilterChange={setStatusFilter} 
        />
        
        <section className="panel">
          <h2>รายการงาน</h2>
          <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
        </section>
      </main>
    </>
  );
}

export default App;