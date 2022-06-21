import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
        console.log(inputRef.current);
        console.log(inputRef.current.value);

    }
    return (
        <div className='container text-center'>
            <h1 className='my-5'>Focus Screen</h1>
            <input
                ref={inputRef}
                className='form-control my-3 shadow'
                placeholder='Enter your name'
            />
            <button
                className='btn btn-primary my-3 shadow'
                onClick={handleClick}
            >Focus
            </button>
        </div>
    )
}
