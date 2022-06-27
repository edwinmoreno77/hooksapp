import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../components/08-useReducer/TodoApp';
import { useTodo } from '../../hooks/useTodo';

jest.mock("../../hooks/useTodo");


describe('<TodoApp/> test', () => {


    test('should display the TodoApp component', () => {

        useTodo.mockReturnValue({
            todos: [
                { id: 1, description: 'Hacer ejercicio', done: false },
                { id: 2, description: 'No hacer ejercicio', done: true },
            ],
            todosCount: 2,
            pendingTodosCount: 1,
            handleDeleteTodo: jest.fn(),
            handleToggleTodo: jest.fn(),
            handleNewTodo: jest.fn(),
        })

        render(<TodoApp />)
        // screen.debug();
        expect(screen.getByText('Hacer ejercicio')).toBeTruthy();
        expect(screen.getByText('No hacer ejercicio')).toBeTruthy();


    });

});