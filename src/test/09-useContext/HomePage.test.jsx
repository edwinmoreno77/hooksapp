import { render, screen } from "@testing-library/react";
import { UserContex } from "../../components/09-useContext/context/UserContext";
import { HomePage } from "../../components/09-useContext/HomePage";


describe('<HomePage/> test', () => {

    test('should display the component whitout the user', () => {

        render(
            <UserContex.Provider value={{ user: null }}>
                <HomePage />
            </UserContex.Provider>
        );

        const preTag = screen.getByLabelText('pre');
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
                <HomePage />
            </UserContex.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
        expect(preTag.innerHTML).toContain(user.name);

        // con el id recibe un numero y por eso se pasa a string
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);

    });

});