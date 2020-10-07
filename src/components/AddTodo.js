import React, { useState } from 'react'

export const AddTodo = ({onAddTodo}) => {

    const [value, setValue] = useState('')

    const handlerKeyDown = (e) => {
        if (e.keyCode === 13) {
            onAddTodo(value)
            setValue('')
        }
    }

    const handlerOnChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className='container'>
            <input 
                type='text' 
                placeholder='Введите...' 
                value={value} 
                onKeyDown={handlerKeyDown} 
                onChange={handlerOnChange}
            />
        </div>
    )
}