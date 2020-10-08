import React from 'react';
import { AlertState } from './alert/AlertState';
import { AddTodo } from './components/AddTodo';
import { Alert } from './components/Alert';
import { TodoList } from './components/TodoList';
import { TodoState } from './todo/TodoState';

function App() {

  return (
    <AlertState>
      <TodoState>
        <h1 className='logo'>Todos</h1>
        <Alert />
        <AddTodo />
        <TodoList />
      </TodoState>
    </AlertState>
  );
}

export default App;
