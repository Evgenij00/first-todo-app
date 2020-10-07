import React from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { TodoState } from './todo/TodoState';

function App() {

  return (
    <TodoState>
        <h1 className='logo'>Todos</h1>
        <AddTodo />
        <TodoList />
    </TodoState>
  );
}

export default App;
