import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {

    const { description, onInputChange, onResetForm, formState } = useForm({
        id: new Date().getTime(),
        description: '',
        done: false,
    })


    const onNewTodo = (event) => {

        event.preventDefault();
        if (description.trim().length === 0) return;
        handleNewTodo(formState);
        onResetForm();

        //----------------------

        // const newTodo = {
        //     id: new Date().getTime(),
        //     description: description,
        //     done: false,
        // }
        // handleNewTodo(newTodo);
        // onResetForm();
    }

    return (
        <form onSubmit={onNewTodo}>
            <input
                type="text"
                name="description"
                placeholder='Ingrese una tarea'
                className='form-control shadow'
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-primary m-2 shadow'
            >
                Agregar
            </button>
        </form>
    )
}
