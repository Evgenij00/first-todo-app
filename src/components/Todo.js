import React from 'react'

export const Todo = ({todo, onRemove}) => {

    const hendlerOnSubmit = () => {
        onRemove(todo.id)
    }

    const hedlerOnChange = (e) => {
        e.target.parentNode.classList.toggle('done')
    }

    return (
        <li className='todo'>
            <input className='todo_checkbox' type='checkbox' onChange={hedlerOnChange}/>
            <span className='todo_name'>{todo.name}</span>
            <button onClick={hendlerOnSubmit}>Delete</button>
        </li>
    )
}