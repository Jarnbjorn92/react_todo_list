// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy Shopping", priority:"high"},
    {name: "Clean bathroom", priority: "low" },
    {name: "Car's MOT", priority: "high" }
  ])

  const [newTask, setNewTask] = useState("")
  const [newPriority, setPriority] = useState("")

  const setHigh = () => {
    setPriority('high')
  }

  const setLow = () => {
    setPriority('low')
  }

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index}>
        {task.priority === 'high' ? <span className='high'>{task.name}</span> : <span className='low'>{task.name}</span>}
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push({name: newTask, priority: newPriority});
    setTasks(copyTasks);
    setNewTask("")
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
    
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>New Task: </label>
        <input type="text" id="new-task" value={newTask} onChange={handleTaskInput}></input>
        
        <label>Priority: </label>
        <label htmlFor='high'>High</label>
        <input type="radio" name='priority' id="high-priority" onChange={setHigh}></input>
        
        <label htmlFor='low'>Low</label>
        <input type="radio" name='priority' id="low-priority" onChange={setLow}></input>

        <input type='submit' value='Save Item'></input>
      </form>

      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}

export default App;
