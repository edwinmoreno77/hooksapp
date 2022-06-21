import React from "react";
import { useCounter } from "../../hooks/useCounter";


export const CounterWithCustomHook = () => {


    const { state, increment, decrement, reset } = useCounter(0);

    return (
        <div className='text-center p-5 my-5'>
            <h1 className='my-3 p-3'>Counter With CustomHook</h1>
            <h2 className="my-3 p-3">{state}</h2>

            <button className='btn btn-primary m-2 p-2' onClick={() => increment(1)}>Sumar</button>
            <button className='btn btn-warning m-2 p-2' onClick={reset}>Reset</button>
            <button className='btn btn-danger m-2 p-2' onClick={() => decrement(1)}>Restar</button>
        </div>
    )
}
