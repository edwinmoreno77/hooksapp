import { todoReducer } from "../../components/08-useReducer/todoReducer";



describe('todoReducer test', () => {

    const initialState = [
        {
            id: 1,
            text: 'Demo Todo',
            done: false
        },
        {
            id: 3,
            text: 'Demo Todo 3',
            done: false
        }
    ];

    test('should return the initial state', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toEqual(initialState);
        expect(newState).toBe(initialState);// se puede usar el toBe porque es un objeto en el mismo espacio en memoria


    });

    test('should add TODO', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                text: 'Demo Todo 2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(3);
        expect(newState).toContain(action.payload);

    });

    test('should remove TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 3
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);

    });

    test('should toggle TODO', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });

});