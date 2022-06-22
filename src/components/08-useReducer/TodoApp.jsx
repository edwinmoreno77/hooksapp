import React from 'react'
import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },

]

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        event.preventDefault();

        console.log(todo);


    }

    return (
        <div className='container m-5'>
            <h1>TodoApp: 10 <small>Pendientes: 2</small> </h1>
            <hr />

            <div className="row d-block">
                <div className="col-7 m-5">
                    <TodoList todos={todos} />
                </div>
                <div className="col-5 m-5">
                    <h4>Agregar TODO</h4>
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>

            </div>

        </div>
    )
}
