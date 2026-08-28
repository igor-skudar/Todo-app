import { useState } from "react";
import "./App.css";
import deleteIcon from "./assets/delete-icon.svg";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [allTasks, setAllTasks] = useState([{ id: Date.now(), text: "Welcome to my ToDo app", completed: false }]);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    const newTask = { id: Date.now(), text: inputValue, completed: false };
    setAllTasks([...allTasks, newTask]);
    setInputValue("");
  };

  function clearCompleted() {
    setAllTasks(allTasks.filter(task => !task.completed));
  };

  function deleteTask(id) {
    setAllTasks(allTasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setAllTasks(allTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  let tasks;
  if (filter === "all") {
    tasks = allTasks;
  } else if (filter === "active") {
    tasks = allTasks.filter(task => !task.completed);
  } else {
    tasks = allTasks.filter(task => task.completed);
  }
  
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <p>
        <span>{allTasks.filter(task => !task.completed).length} </span>
        of
        <span> {allTasks.length} </span>
        tasks left
      </p>
      <input 
        type="text" 
        placeholder="Add a new task" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
        if (e.key === "Enter") {
          addTask();
        }
      }}
      />
      <button onClick={addTask}>+ Add</button>
      <div className="filterMenu">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} 
            onChange={() => toggleTask(task.id)}/>
            <span style={{textDecoration: task.completed ? "line-through" : "none"}}>
              {task.text}
            </span>
            <button aria-label="Delete task" onClick={()=> deleteTask(task.id)}>
              <img src={deleteIcon} className="deleteIcon" alt="" />
            </button>
          </li>
        ))}
      </ul>
      <button className="clearBtn" onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};