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
            <div>
                <input className='todo_checkbox' type='checkbox' onChange={hedlerOnChange}/>
                &nbsp;
                <span>{todo.name}</span>
            </div>
            <button onClick={hendlerOnSubmit}>Delete</button>
        </li>
    )
}