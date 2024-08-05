import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
  const handleTaskAdded = () => {
    // Handle task added
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList />
    </div>
  );
}
