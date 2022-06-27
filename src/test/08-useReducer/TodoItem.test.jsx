const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../components/08-useReducer/TodoItem");



describe('<TodoItem/> test', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('it should show the TODO pending completion', () => {

        render(<TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between m-1 shadow');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center p-2');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('it should show the completed TODO', () => {

        todo.done = true;

        render(<TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span should call the toggleTodo when clicked', () => {

        todo.done = true;

        render(<TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const spanElement = screen.getByLabelText('span');

        spanElement.click();
        expect(onToggleTodoMock).toHaveBeenCalledTimes(1);

        //otra forma de hacerlo

        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalled();

        //otra forma de hacerlo
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button should call the onDeleteTodo when clicked', () => {

        render(<TodoItem todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
        />);

        const buttonElement = screen.getByRole('button');

        buttonElement.click();
        expect(onDeleteTodoMock).toHaveBeenCalledTimes(1);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });


});