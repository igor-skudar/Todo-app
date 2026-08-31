import { useState } from "react";
import deleteIcon from "./assets/delete-icon.svg";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [allTasks, setAllTasks] = useState([{ id: Date.now(), text: "Welcome to my ToDo app", completed: false }]);
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function addTask() {
    if (!inputValue.trim()) {
      return;
    }
    const newTask = { 
      id: crypto.randomUUID(), 
      text: inputValue.trim(), 
      completed: false 
    };
    setAllTasks([...allTasks, newTask]);
    setInputValue("");
  };

  function clearCompleted() {
    setAllTasks(allTasks.filter(task => !task.completed));
  };

  function deleteTask(id) {
    setAllTasks(allTasks.filter(task => task.id !== id));
  };

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
    <div className="App" data-theme={theme}>
      <button className="themeToggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <h1 style={{marginBottom: (filter === "active" || filter === "completed") ? "var(--space-lg)" : "var(--space-sm)"}}>ToDo App</h1>
      {!(filter === "active" || filter === "completed") && (
        <p className="taskCount">
          {allTasks.filter(task => !task.completed).length} of {allTasks.length} tasks left
        </p>
      )}
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
        <button 
          className={filter === "all" ? "active" : ""} 
          onClick={() => setFilter("all")}
        >All</button>
        <button 
          className={filter === "active" ? "active" : ""} 
          onClick={() => setFilter("active")}
        >Active</button>
        <button 
          className={filter === "completed" ? "active" : ""} 
          onClick={() => setFilter("completed")}
        >Completed</button>
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