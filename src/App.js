import React from 'react';
import './App.css';

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskListContext from "./components/TaskListContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskListContext>
        <div>
          <TaskForm />
          <TaskList />
        </div>
      </TaskListContext>
      </div>
  );
  }
export default App;
