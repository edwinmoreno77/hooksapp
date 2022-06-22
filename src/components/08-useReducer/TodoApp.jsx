import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState
}

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(action);

    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatchTodo(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatchTodo(action);
    }

    console.log(todos);
    return (
        <div className='container m-5'>
            <h1>TodoApp: 10 <small>Pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>

            </div>

        </div>
    )
}
