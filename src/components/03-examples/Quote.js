// import { MultipleCustomHooks } from './MultipleCustomHooks'

import React from 'react'

export const Quote = ({ quote, author }) => {
    return (
        <blockquote className='blockquote text-center'>
            <p className='my-3'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
    )
}
