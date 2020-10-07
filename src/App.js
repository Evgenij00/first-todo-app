import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos(prev => [...prev, {name: text}])
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
