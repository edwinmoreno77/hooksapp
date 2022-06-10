import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        console.log('componente montado')

        return () => {
            console.log('componente desmontado')

        }
    }, [])

    return (
        <div className='m-3'>
            <h3>Eres Genial !!!</h3>
        </div>
    )
}
