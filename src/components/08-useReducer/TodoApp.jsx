import React from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodo } from '../../hooks'


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo()

    return (
        <div className='container m-5'>
            <h1>TodoApp: {todosCount} <small>Pendientes: {pendingTodosCount}</small> </h1>
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
