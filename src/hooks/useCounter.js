import React, { useState } from 'react'

export const useCounter = (initialState = 0) => {
    const [state, setState] = useState(initialState);

    const increment = (factor = 1) => {
        setState(state + factor);
    }

    const reset = () => {
        setState(initialState);
    }

    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
}
