import { useState } from "react";
import { RegisterEditor } from "../../apis/apis";
import { fireSwal } from "../../assetes/utils/utils";

const useHandleSubmit = () => {

    const [checked, setChecked] = useState(false);

    const [alias, setAlias] = useState("");

    const editorUtailty = new RegisterEditor(alias);

    const handelSubmit = (e) => {

        e.preventDefault();

        if (checked && alias) {

            editorUtailty.post();

        } else {

            fireSwal('error', 'Oops...', 'Rellena todos los campos');

        }
    };
    return { handelSubmit, checked, setChecked, alias, setAlias };
}


export {
    useHandleSubmit
}