import React, { useEffect, useState } from 'react';
import { Message } from './Message';



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey!');
    }, []);

    useEffect(() => {
        // console.log('hey, cambio el formState!');
    }, [formState]);

    useEffect(() => {
        // console.log('hey, cambio el email!');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
        // console.log(target);
        // console.log(target.value);
    }



    return (
        <div className='container'>
            <div className='text-center'>
                <h1 className='p-5 m-5'>useEffect</h1>
                <div className='form-group'>
                    <input
                        type="text"
                        name="name"
                        className="form-control m-2 shadow"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        className="form-control m-2 shadow"
                        placeholder='Correo:"Pedro@gmail.com"'
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {name === 'edwin' && <Message />}
        </div>
    )

}
