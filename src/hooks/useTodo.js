import { useEffect, useReducer } from "react"
import { todoReducer } from "../components/08-useReducer/todoReducer"


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || initialState
}

export const useTodo = () => {

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

    return {
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos,
        initialState,
        init,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todosCount: todos.length
    }

}
