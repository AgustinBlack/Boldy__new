import { createContext, useContext } from 'react'
import { useState } from 'react'

const NotificationContext = createContext()

export const UseNotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState([])

    const showNotification = (mensaje, type) => {
        setNotification({ mensaje, type })
        setTimeout(() => {
            setNotification({mensaje: '', type: ''})
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{notification, showNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
