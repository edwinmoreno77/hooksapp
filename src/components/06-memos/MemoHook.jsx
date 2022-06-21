import { useMemo, useState } from "react";
import { useCounter } from "../../hooks";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos...');
    }

    return `${iterationNumber} iteraciones`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(40);

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div className="text-center m-5">
            <h1 className="m-5">Counter: <small>{counter}</small> </h1>
            <hr />

            <h4>{memorizedValue}</h4>

            <button
                className="btn btn-primary p-2 m-2"
                onClick={() => increment()}>
                Sumar
            </button>

            <button
                className="btn btn-danger p-2 m-2"
                onClick={() => setShow(!show)}
            >
                Shoe/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
