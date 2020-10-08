import React, { useContext, useState } from 'react'
import { AlertContext } from '../contexts/alert/alertContext'
import { TodoContext } from '../contexts/todo/todoContext'

export const Form = () => {

    const {addTodo} = useContext(TodoContext)
    const {showAlert} = useContext(AlertContext)

    const [value, setValue] = useState('')

    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {

            if (value.trim()) {
                addTodo(value)
                showAlert('Заметка успешно добавлена :)', 'success')
            } else {
                showAlert('Введите название заметки!')
            }

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
                placeholder='Введите название заметки...' 
                value={value} 
                onKeyDown={handlerKeyDown} 
                onChange={handlerOnChange}
            />
        </div>
    )
}