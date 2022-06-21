import React, { useState } from 'react'


export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
    });

    const { counter1, counter2, counter4 } = state;

    console.log(state);

    return (
        <div className='text-center p-5 my-5'>
            <h1>Counter 1 = {counter1}</h1>
            <h1>Counter 2 = {counter2}</h1>
            <h1>Counter 4 = {counter4}</h1>

            <button
                className='btn btn-primary my-5'
                onClick={() => {
                    setState({
                        ...state,
                        counter1: counter1 + 1,
                        counter2: counter2 + 2,
                        counter4: counter4 + 4
                    });
                }}
            >
                Sumar
            </button>
        </div>
    )
}
