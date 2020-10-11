import React, { useEffect, useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState: React.FC = ({children}) => {

    const initialValue = JSON.parse(localStorage.getItem('todos')!) || [];

    const [todos, dispatch] = useReducer(todoReducer, initialValue)

    const addTodo = (text: string) => dispatch({type: 'add', text})
    const removeTodo = (id: number) => dispatch({type: 'remove', id})

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)) 
    }, [todos])

    return (
        <TodoContext.Provider value={{addTodo, removeTodo, todos}}>
            {children}
        </TodoContext.Provider>
    )
}