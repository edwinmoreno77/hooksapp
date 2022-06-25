import React from 'react'
import { useContext } from 'react'
import { UserContex } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContex);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>


            <button
                className="btn btn-primary"
                onClick={() => setUser({ id: 654654, name: 'Edwin Moreno', email: 'Edwinmoreno@google.com' })}
            >
                Establecer usuario
            </button>
        </>
    )
}
