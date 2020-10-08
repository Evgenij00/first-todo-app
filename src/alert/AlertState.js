import React, { useState } from 'react'
import { AlertContext } from './alertContext'

export const AlertState = ({children}) => {

    const [alert, setAlert] = useState({show: false})

    const showAlert = (type, text) => {
        setAlert({show: true, type, text})
    }

    const hideAlert = () => {
        setAlert({show: false})
    }

    return (
        <AlertContext.Provider value={{showAlert, hideAlert, alert}}>
            {children}
        </AlertContext.Provider>
    )

}