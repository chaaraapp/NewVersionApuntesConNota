import { Auth } from "../../apis/apis";

export const useHandleSubmit = (formData) => {

    const handelSubmit = e => {

        e.preventDefault();

        const auth = new Auth('https://apiapn.copisterialowcost.info/login?Email=');

        auth.postLogin(formData);

    }

    return { handelSubmit };

}