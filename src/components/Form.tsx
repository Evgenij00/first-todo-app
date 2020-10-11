import React, { useContext, useState } from 'react'
import { AlertContext } from '../contexts/alert/alertContext'
import { TodoContext } from '../contexts/todo/todoContext'

export const Form: React.FC = () => {

    const {addTodo} = useContext(TodoContext)
    const {showAlert} = useContext(AlertContext)

    const [value, setValue] = useState<string>('')

    const handlerKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {

            if (value.trim()) {
                addTodo!(value)
                showAlert!('Заметка успешно добавлена :)', 'success')
            } else {
                showAlert!('Введите название заметки!', 'warrning')
            }

            setValue('')
        }
    }

    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
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