

import React from 'react'
import { UserContex } from './userContext'

export const UserProvider = ({ children }) => {
    return (
        <UserContex.Provider value={{ hola: 'Mundo' }}>
            {children}
        </UserContex.Provider>
    )
}
