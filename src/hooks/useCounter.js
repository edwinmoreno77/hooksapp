import { useState } from 'react'

export const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = (value = 1) => {
        setCounter((counter) => counter + value);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter((counter) => counter - value);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
