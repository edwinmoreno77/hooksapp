

import React from 'react'
import { useState } from 'react';
import { UserContex } from './UserContext';


// const user = {
//     id: 21654216,
//     name: 'Edwin Moreno',
//     email: 'edwinmoreno77@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        <UserContex.Provider value={{ user, setUser }}>
            {children}
        </UserContex.Provider>
    )
}
