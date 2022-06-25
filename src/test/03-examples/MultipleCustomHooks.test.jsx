import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";


jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe('MultipleCustomHooks test', () => {

    // const mockIncrement = jest.fn();

    // useCounter.mockReturnValue({
    //     counter: 1,
    //     increment: mockIncrement
    // });

    // beforeEach(() => {
    //     jest.clearAllMocks();
    // });

    test('should render < MultipleCustomHooks/>', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));
        expect(screen.getByRole('button', { name: 'Anterior' }));
        expect(screen.getByRole('button', { name: 'Reset' }));
        expect(screen.getByRole('button', { name: 'Siguiente' }));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeTruthy();

    });

    test('it should show the Quote', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        useFetch.mockReturnValue({
            data: [{ author: 'Edwin', quote: 'I am the best' }],
            loading: false,
            error: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('I am the best'));
        expect(screen.getByText('Edwin'));

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();



    });

    test('should call the increment function', () => {

        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        useFetch.mockReturnValue({
            data: [{ author: 'Edwin', quote: 'I am the best' }],
            loading: false,
            error: null
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        fireEvent.click(nextButton);


        expect(nextButton.disabled).toBeFalsy();

        expect(mockIncrement).toHaveBeenCalled();

    });

});