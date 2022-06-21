import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (value) => {
            setCounter((counter) => counter + value);
        }, [])

    useEffect(() => {

    }, [increment]);

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}
