import { useState } from "react";
import { useCounter } from "../../hooks";
import { Small } from "./Small";



export const Memorize = () => {

    const { counter, increment } = useCounter(0);

    const [show, setShow] = useState(true);

    return (
        <div className="text-center m-5">
            <h1 className="m-5">Counter: <Small value={counter} /> </h1>

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
