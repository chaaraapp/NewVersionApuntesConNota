import { useState } from "react";
import { Auth } from "../../apis/apis";

export const useHandleSubmit = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nombre: "",
        apellidos: ""
    });

    const handelSubmit = e => {
        e.preventDefault();

        const auth = new Auth('https://apiapn.copisterialowcost.info/register');

        auth.postRegister(formData);

    }

    return { formData, setFormData, handelSubmit };
}