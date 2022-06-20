import { useLayoutEffect, useRef, useState, } from 'react'

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <blockquote style={{ display: 'flex' }} className='blockquote text-center'>
                <p ref={pRef} className='my-3'>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
