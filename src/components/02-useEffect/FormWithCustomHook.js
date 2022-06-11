import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';



export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        // console.log('passwod completed');

    }, [password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }





    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='text-center'>
                <h1 className='p-5 m-5'>FormWithCustomHook</h1>
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
                    <input
                        type="password"
                        name="password"
                        className="form-control m-2 shadow"
                        placeholder='******'
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className='btn btn-primary'>Guardar</button>
            </form>

        </div>
    )

}
