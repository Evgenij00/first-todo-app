import React, { useContext } from 'react'
import { AlertContext } from '../alert/alertContext'

export const Alert = () => {

    const {hideAlert, alert} = useContext(AlertContext)

    if (alert.show) {
        return (
            <div className={`alert alert-${alert.type}`}>
                <span>{alert.text}</span>
                <button onClick={hideAlert}>Ok</button>
            </div>
        )
    } else {
        return <></>
    }
}