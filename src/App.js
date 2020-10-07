import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Todo } from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        name: text
      }
    ]
  )}

  const removeTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <AddTodo onAddTodo={addTodo} />
      <ul>
        {todos.map(todo => <Todo onRemove={removeTodo} todo={todo} key={todo.id} />)}
      </ul>
    </div>
  );
}

export default App;
