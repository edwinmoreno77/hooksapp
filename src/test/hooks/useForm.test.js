import { renderHook, act } from '@testing-library/react';
import { useForm } from "../../hooks/useForm";


describe('useForm test', () => {

    const user = {
        id: 123,
        name: 'Edwin Moreno',
        email: 'edwinmoreno77@gmail'
    }

    // const { result } = renderHook(() => useForm(user));
    // const { formState, onInputChange, onResetForm } = result.current;

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(user));
        const { formState, onInputChange, onResetForm } = result.current;

        expect(result.current.formState).toEqual(user);
        expect(result.current.onInputChange).toBeInstanceOf(Function);
        expect(result.current.onResetForm).toBeInstanceOf(Function);

        //otra forma de hacerlo

        expect(formState).toEqual(user);
        expect(onInputChange).toEqual(expect.any(Function));
        expect(onResetForm).toEqual(expect.any(Function));

        //otra forma de hacerlo

        expect(result.current).toEqual({
            id: user.id,
            name: user.name,
            email: user.email,
            formState: user,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('onInputChange should change the value', () => {

        const { result } = renderHook(() => useForm(user));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: 'Efren Moreno' } });
        });

        expect(result.current.formState).toEqual({
            id: 123,
            name: 'Efren Moreno',
            email: 'edwinmoreno77@gmail'
        });


    });

    test('onResetForm should reset the value', () => {

        const { result } = renderHook(() => useForm(user));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: 'Efren Moreno' } });
            onResetForm();
        })

        expect(result.current.formState).toEqual(user);
        expect(result.current.name).toBe(user.name);


    });

});