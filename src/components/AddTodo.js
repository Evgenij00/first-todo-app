import React, { useContext, useState } from 'react'
import { TodoContext } from '../todo/todoContext'

export const AddTodo = () => {

    const {addTodo} = useContext(TodoContext)

    const [value, setValue] = useState('')

    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {
            addTodo(value)
            setValue('')
        }
    }

    const handlerOnChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='form'>
            <input
                className='form_input' 
                type='text' 
                placeholder='Введите...' 
                value={value} 
                onKeyDown={handlerKeyDown} 
                onChange={handlerOnChange}
            />
        </div>
    )
}