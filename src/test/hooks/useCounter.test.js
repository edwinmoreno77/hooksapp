import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";


describe('useCounter test', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(1);
        expect(result.current.increment).toBeInstanceOf(Function);
        expect(result.current.decrement).toBeInstanceOf(Function);
        expect(result.current.reset).toBeInstanceOf(Function);

        //otra forma de hacerlo

        const { counter, increment, decrement, reset } = result.current;
        expect(counter).toBe(1);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('should return the counter whit value 100', () => {

        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);


        //otra forma de hacerlo

        const { counter } = result.current;
        expect(counter).toBe(100);



    });

    test('should increment the counter', () => {

        const { result } = renderHook(() => useCounter());

        const { increment } = result.current;

        act(() => {
            increment(9);
            increment(10);

        });

        expect(result.current.counter).toBe(20);


    });

    test('should decrement the counter', () => {

        const { result } = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act(() => {
            decrement(50);
        });

        expect(result.current.counter).toBe(50);


    });

    test('should reset the counter', () => {

        const { result } = renderHook(() => useCounter(5));

        const { reset, increment } = result.current;

        act(() => {
            increment(10);
            reset();
        });

        expect(result.current.counter).toBe(5);


    })
});