import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {


    return (
        <li className='list-group-item d-flex justify-content-between m-1 shadow'>
            <span
                onClick={() => onToggleTodo(todo.id)}
                aria-label='span'
                className={`align-self-center p-2 ${(todo.done) ? 'text-decoration-line-through' : ''}`}
            >
                {todo.description}
            </span>
            <button
                onClick={() => onDeleteTodo(todo.id)}
                className='btn btn-danger shadow'>
                Borrar
            </button>
        </li>
    )
}
