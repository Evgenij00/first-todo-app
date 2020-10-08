import React, { useContext, useState } from 'react'
import { AlertContext } from '../alert/alertContext'
import { TodoContext } from '../todo/todoContext'

export const AddTodo = () => {

    const {addTodo} = useContext(TodoContext)
    const {showAlert} = useContext(AlertContext)

    const [value, setValue] = useState('')

    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {

            if (value.trim()) {
                addTodo(value)
                showAlert('success', 'Заметка успешно добавлена :)')
            } else {
                showAlert('warrning', 'Введите название заметки!')
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
                placeholder='Введите...' 
                value={value} 
                onKeyDown={handlerKeyDown} 
                onChange={handlerOnChange}
            />
        </div>
    )
}