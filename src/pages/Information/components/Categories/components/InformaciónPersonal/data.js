import { useState } from "react";

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

    return { inputsValue, setInputsValue };
}

const handelChangeInput = (name, value, state) => {
    return state(perv => ({ ...perv, [name]: value }));
}
export {
    useDataSetter,
    handelChangeInput
}