import React from 'react'

export const Todo = ({todo, onRemove}) => {

    const hendlerOnSubmit = () => {
        onRemove(todo.id)
    }

    return (
        <li>
            <input type='checkbox' />
            {todo.name}
            <button onClick={hendlerOnSubmit}>Delete</button>
        </li>
    )
}