import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className='container text-center my-5'>
            <h1>Real Example Ref</h1>

            {show && <MultipleCustomHooks />}

            <button
                className='btn btn-primary my-3 shadow'
                onClick={() => setShow(!show)}
            >Show/Hide
            </button>
        </div>
    )
}
