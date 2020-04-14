import React from 'react';

import './App.css';

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem"

function App() {
  return (
    <div className="App">
      <Header />
      <TodoItem>
        <div>
          <TodoForm />
          <TodoList />
        </div>
      </TodoItem>
    </div>
  );
}

export default App;
