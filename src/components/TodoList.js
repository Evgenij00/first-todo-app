import React from 'react'
import {Todo} from './Todo'

export const TodoList = () => {

    const todoList = [
        {name: "Купить хлеба"},
        {name: "Купить хлеба"},
        {name: "Купить хлеба"},
        {name: "Купить хлеба"},
    ]

    return (
        <ul>
            {todoList.map(todo => <Todo todo={todo} />)}
        </ul>
    )
}