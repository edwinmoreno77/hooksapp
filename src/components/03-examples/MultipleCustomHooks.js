import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    return (
        <div className='container m-5 text-center'>
            <h1 className='my-5'>Breaking Bad Quotes</h1>
            <div>
                {
                    loading ?
                        (
                            <div className='alert alert-info'>
                                Loading...
                            </div>
                        )
                        :
                        (
                            <blockquote className='blockquote text-center'>
                                <p className='mb-3'>{quote}</p>
                                <footer className='blockquote-footer'>{author}</footer>
                            </blockquote>
                        )

                }
            </div>
            <button onClick={increment} className='btn btn-primary'>Siguiente</button>
        </div>
    )
}
