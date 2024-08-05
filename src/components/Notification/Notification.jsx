import React from 'react'
import clases from './Notification.module.css'
import { useNotification } from '../../context/UseNotification';

const Notification = () => {
    const { notification } = useNotification();
    const { mensaje, type } = notification;

    if (!mensaje) return null

    return (
        <div className={`${clases.notification} ${clases[type]}`}>
            { mensaje }
        </div>
    )
}

export default Notification
