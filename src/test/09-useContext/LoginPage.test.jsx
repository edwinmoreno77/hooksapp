import { render, screen, fireEvent } from "@testing-library/react";
import { UserContex } from "../../components/09-useContext/context/UserContext";
import { LoginPage } from "../../components/09-useContext/LoginPage";


describe('<LoginPage/> test', () => {

    test('should display the component whitout the user', () => {

        render(
            <UserContex.Provider value={{ user: null }}>
                <LoginPage />
            </UserContex.Provider>
        );
        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    });



    test('should display the component whit the user', () => {

        const user = {
            id: 1,
            name: 'Edwin Moreno',
        }

        render(
            <UserContex.Provider value={{ user }}>
                <LoginPage />
            </UserContex.Provider>
        );
        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
        // screen.debug();
        expect(preTag.innerHTML).toContain(user.name);

        // con el id recibe un numero y por eso se pasa a string
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);

    });

    test('should call setUser when the button is clicked ', () => {

        const user = {
            id: 1,
            name: 'Edwin Moreno',
        }

        const setUserMock = jest.fn();

        render(
            <UserContex.Provider value={{ user, setUser: setUserMock }}>
                <LoginPage />
            </UserContex.Provider>
        );
        const userButton = screen.getByRole('button');

        userButton.click();
        expect(setUserMock).toHaveBeenCalledTimes(1);
        expect(setUserMock).toHaveBeenCalledWith({ id: 654654, name: 'Edwin Moreno', email: 'Edwinmoreno@google.com' });

        // // otra forma de hacerlo
        fireEvent.click(userButton);
        expect(setUserMock).toHaveBeenCalledTimes(2);


    });
});