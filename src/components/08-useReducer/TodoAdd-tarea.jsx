import React from 'react'
import { useState } from 'react';

export const TodoAdd = ({ handleNewTodo }) => {

    const [todo, setTodo] = useState({
        id: new Date().getTime(),
        description: '',
        done: false,

    });

    const { description } = todo;

    const onNewTodo = ({ target }) => {
        const { value, name } = target;

        setTodo({
            ...todo,
            [name]: value
        });

        return todo;
    }

    return (
        <form onSubmit={() => {
            handleNewTodo(todo)
            setTodo({
                id: new Date().getTime(),
                description: '',
                done: false,
            })
        }}>
            <input
                type="text"
                name="description"
                placeholder='Ingrese una tarea'
                className='form-control shadow'
                value={description}
                onChange={onNewTodo}
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
