import { useCounter, useFetch } from '../../hooks';
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    return (
        <div className='container my-5 text-center'>
            <h1 className='my-5'>Breaking Bad Quotes</h1>
            <div>
                {(loading) ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
            </div>
            <button className='btn btn-primary' onClick={() => counter <= 1 ? reset() : decrement()} disabled={loading}>Anterior</button>
            <button onClick={reset} className='btn btn-danger m-1' disabled={loading}>Reset</button>
            <button onClick={() => increment()} className='btn btn-primary' disabled={loading}>Siguiente</button>

        </div>
    )
}
