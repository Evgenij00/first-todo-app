import React from 'react'
import { ITodo } from '../interfaces'

// interface TodoProps {
//     onRemove(id: number): void,
//     todo: ITodo,
// }

type TodoProps = {
    onRemove: (id: number) => void;
    todo: ITodo;
}

export const Todo: React.FC<TodoProps> = ({todo, onRemove}) => {

    const hendlerOnSubmit = () => {
        onRemove(todo.id)
    }

    const hedlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.nextElementSibling?.classList.toggle('done')
    }

    return (
        <li className='todo'>
            <input className='todo_checkbox' type='checkbox' onChange={hedlerOnChange}/>
            <span className='todo_name'>{todo.name}</span>
            <button onClick={hendlerOnSubmit}>Delete</button>
        </li>
    )
}