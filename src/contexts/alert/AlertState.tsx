import React, { useReducer } from 'react'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'

export const AlertState: React.FC = ({children}) => {

    const [alert, dispatch] = useReducer(alertReducer, {visible: false})

    const showAlert = (text: string, type: string = 'warrning') => {
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