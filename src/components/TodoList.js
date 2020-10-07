import React from 'react'
import {Todo} from './Todo'

export const TodoList = ({todos}) => {

    return (
        <ul>
            {todos.map(todo => <Todo todo={todo} />)}
        </ul>
    )
}