import React, { useReducer } from 'react'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'

export const AlertState = ({children}) => {

    const [alert, dispatch] = useReducer(alertReducer, {visible: false})

    const showAlert = (text, type = 'warrning') => {
        const payload = {text, type}
        dispatch({type: 'show', payload})
    }

    const hideAlert = () => {
        dispatch({type: 'hide'})
    }

    return (
        <AlertContext.Provider value={{showAlert, hideAlert, alert}}>
            {children}
        </AlertContext.Provider>
    )

}