import React from 'react'

export const TodoItem = ({ todo }) => {

    // console.log(todo);

    return (
        <li className='list-group-item d-flex justify-content-between m-1 shadow'>
            <span className='align-self-center p-2'>{todo.description}</span>
            <button className='btn btn-danger shadow'>Borrar</button>
        </li>
    )
}
