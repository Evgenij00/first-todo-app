import React, { useContext } from 'react'
import { AlertContext } from '../contexts/alert/alertContext'

export const Alert: React.FC = () => {

    const {hideAlert, alert} = useContext(AlertContext)

    if (alert.visible) {
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