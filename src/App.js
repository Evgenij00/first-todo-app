import React from 'react';
import { AlertState } from './contexts/alert/AlertState';
import { Alert } from './components/Alert';
import { TodoList } from './components/TodoList';
import { TodoState } from './contexts/todo/TodoState'
import { Form } from './components/Form';

function App() {

  return (
    <AlertState>
      <TodoState>
        <h1 className='logo'>Заметки</h1>
        <Alert />
        <Form />
        <TodoList />
      </TodoState>
    </AlertState>
  );
}

export default App;
