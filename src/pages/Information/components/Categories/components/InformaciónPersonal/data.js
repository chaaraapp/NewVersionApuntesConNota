import { useEffect, useState } from "react";
import { User } from "../../../../../../apis/apis";

const useDataSetter = (userInfo) => {
    const [inputsValue, setInputsValue] = useState({
        nifEnvio: userInfo?.nifEnvio,
        nombreEnvio: userInfo?.nombreEnvio,
        direccionEnvio: userInfo?.direccionEnvio,
        codigoPostalEnvio: userInfo?.codigoPostalEnvio,
        ciudadEnvio: userInfo?.ciudadEnvio,
        provinciaEnvio: userInfo?.provinciaEnvio,
        paisEnvio: userInfo?.paisEnvio,
        movilEnvio: userInfo?.movilEnvio,
        telefonoEnvio: userInfo?.telefonoEnvio,
        personaContacto: "string",
        email: userInfo?.email,
    });

    useEffect(() => {

        setInputsValue(perv => ({
            ...perv,
            nifEnvio: userInfo?.nifEnvio,
            nombreEnvio: userInfo?.nombreEnvio,
            direccionEnvio: userInfo?.direccionEnvio,
            codigoPostalEnvio: userInfo?.codigoPostalEnvio,
            ciudadEnvio: userInfo?.ciudadEnvio,
            provinciaEnvio: userInfo?.provinciaEnvio,
            paisEnvio: userInfo?.paisEnvio,
            movilEnvio: userInfo?.movilEnvio,
            telefonoEnvio: userInfo?.telefonoEnvio,
            email: userInfo?.email,
        }))

    }, [userInfo]);

    return { inputsValue, setInputsValue };
}

const handelChangeInput = (name, value, state) => {
    return state(perv => ({ ...perv, [name]: value }));
}

const useHandleSubmit = (inputsValue, setUserInfo) => {

    const userUtailty = new User();

    useEffect(() => {

        userUtailty.getUserInfo(setUserInfo);

    }, []);

    const handelSubmit = e => {

        e.preventDefault();

        userUtailty.update(inputsValue);

    }

    return { handelSubmit };

}

export {
    useDataSetter,
    handelChangeInput,
    useHandleSubmit
}