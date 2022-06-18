import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const { x, y } = coords;

    useEffect(() => {

        const onMouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }


        window.addEventListener('mousemove', onMouseMove);


        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, [])

    return (
        <div className='m-3'>
            <h3>Eres Genial !!!</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
