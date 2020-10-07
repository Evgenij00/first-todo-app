import React from 'react'

export const Todo = ({todo, onRemove}) => {

    const hendlerOnSubmit = () => {
        onRemove(todo.id)
    }

    const hedlerOnChange = (e) => {
        e.target.parentNode.classList.toggle('done')
    }

    return (
        <li>
            <input type='checkbox' onChange={hedlerOnChange}/>
            {todo.name}
            <button onClick={hendlerOnSubmit}>Delete</button>
        </li>
    )
}