import { useState } from "react"


export const useForm = (initialstate = {}) => {

    const [values, setValues] = useState(initialstate);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange];


}
