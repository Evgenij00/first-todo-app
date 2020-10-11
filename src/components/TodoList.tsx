import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todo/todoContext'
import { Todo } from './Todo'

type TodoListProps = {
  todos: any[]
}

export const TodoList: React.FC = () => {

    const {removeTodo, todos} = useContext(TodoContext)

    return (
        <ul className='container'>
          {todos!.map(todo  => <Todo onRemove={removeTodo!} todo={todo} key={todo.id} />)}
        </ul>
    )
}