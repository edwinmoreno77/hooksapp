import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, name, email, password, onResetForm } = useForm({
        name: '',
        email: '',
        password: ''
    });

    // const { name, email, password } = formState;

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formState);
    }





    return (
        <div className='container'>
            <form onSubmit={onSubmit} className='text-center'>
                <h1 className='p-5 m-5'>FormWithCustomHook</h1>
                <div className='form-group'>
                    <input
                        type="text"
                        name="name"
                        className="form-control m-2 shadow"
                        placeholder="Nombre"
                        autoComplete="off"
                        value={name}
                        onChange={onInputChange}
                    />
                    <input
                        type="text"
                        name="email"
                        className="form-control m-2 shadow"
                        placeholder='Correo:"Pedro@gmail.com"'
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-control m-2 shadow"
                        placeholder='******'
                        autoComplete="off"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className='btn btn-primary'>Guardar</button>
                <button onClick={onResetForm} className='btn btn-danger m-5'>Reset</button>

            </form>

        </div>
    )

}
