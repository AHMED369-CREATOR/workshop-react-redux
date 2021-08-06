
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList.js/TaskList';

function App() {
  return (
    <div className="app">
      <h1>todo app</h1>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
