import axios from "axios";
import { fireSwal } from "../assetes/utils/utils";

class Auth {

    constructor(url) {

        this.url = url;

    }


    postLogin(data) {

        const { email, password } = data;

        axios({

            method: "post",

            url: `${this.url}${email}&Password=${password}`,

        })
            .then(response => {

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);

                window.location.href = "/";

            })
            .catch(error => {

                fireSwal('error', 'Oops...', error?.response?.data?.message);

            });

    }

    postRegister(data) {

        const params = new URLSearchParams(data);

        axios({

            method: "post",

            url: `${this.url}?${params.toString()}`

        })
            .then(response => {

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', data?.Email);
                sessionStorage.setItem('isRenderRegisterPopup', true);
                window.location.href = "/";

            })
            .catch(error => {

                fireSwal('error', 'Oops...', error?.response?.data?.message);

            })

    }

    postLoginGoogle(tokenGoogle, email) {

        axios({

            method: "post",

            url: `https://apiapn.copisterialowcost.info/login-google?Token=${tokenGoogle}`,

        })
            .then(response => {

                localStorage.setItem('token', response.data);
                localStorage.setItem('email', email);

                window.location.href = "/";

            })
            .catch(error => {

                console.log(error);

            })

    }

}

class User {

    constructor() {

        this.token = localStorage.getItem("token");
        this.email = localStorage.getItem("email");

    }

    getUserInfo(state) {

        const data = {
            email: this.email,
            tienda: "apn",
            culture: "es",
        };

        axios({

            url: 'https://apiapn.copisterialowcost.info/User/get-cliente-datos-envio',

            method: "post",

            headers: {
                accept: "*/*",
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },

            data: JSON.stringify(data)

        })
            .then(response => {

                state(response.data[0])

            })

            .catch(error => { return null });

    }

    update(data) {

        const defaultData = {
            nifEnvio: data?.nifEnvio,
            nombreEnvio: data?.nombreEnvio,
            direccionEnvio: data?.direccionEnvio,
            codigoPostalEnvio: data?.codigoPostalEnvio,
            ciudadEnvio: data?.ciudadEnvio,
            provinciaEnvio: data?.provinciaEnvio,
            paisEnvio: data?.paisEnvio,
            movilEnvio: data?.movilEnvio,
            telefonoEnvio: data?.telefonoEnvio,
            personaContacto: "string",
            email: localStorage.getItem("email"),
            tienda: "string",
            culture: "string",
        }


        axios({

            method: "post",

            url: "https://apiapn.copisterialowcost.info/User/update-cliente-envio",

            headers: {
                accept: "*/*",
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },

            data: JSON.stringify(defaultData),

        })

            .then(response => {

                fireSwal('success', 'Enviado...', 'Se ha guardado tus datos correctamente.')

            }).catch(error => {

                const errors = Object.values(error?.response?.data.errors).join('And');

                fireSwal('error', 'Oops...', errors);

            });

    }

}

class Universities {

    constructor() {

        this.url = "https://apiapn.copisterialowcost.info/Universidades";

    }

    get(state) {

        axios({

            method: "get",

            url: this.url

        }).then(response => {

            state(response.data);

        });

    }

}

class Facultad {

    constructor(universidadId) {

        this.universidadId = universidadId;

        this.url = `https://apiapn.copisterialowcost.info/Facultades?universidadCode=${this.universidadId}`;

    }

    get(state) {

        axios({

            method: "get",

            url: this.url,

            headers: {
                'accept': 'text/plain'
            }

        })

            .then(response => {

                state(response.data)

            })
            .catch(error => error);
    }
}

class Grado {

    constructor(facultadCode) {

        this.facultadCode = facultadCode;

        this.url = `https://apiapn.copisterialowcost.info/Grados?facultadCode=${this.facultadCode}`;

    }

    get(state) {

        axios({

            method: "get",

            url: this.url,

            headers: {
                'accept': 'text/plain'
            }

        })

            .then(response => {

                state(response.data)

            })
            .catch(error => error);
    }
}

class Asignaturas {

    constructor(gradoCode) {

        this.gradoCode = gradoCode;

        this.url = `https://apiapn.copisterialowcost.info/Asignaturas?gradoCode=${this.gradoCode}`;

    }

    get(state) {

        axios({

            method: "get",

            url: this.url,

            headers: {
                'accept': 'text/plain'
            }

        })

            .then(response => {
                console.log('Response', response);
                state(response.data)

            })
            .catch(error => console.log(error, 'Error'));
    }
}

class Curso {

    constructor() {

        this.url = `https://apiapn.copisterialowcost.info/Cursos?gradoId=7293`;

    }

    get(state) {

        axios({

            method: "get",

            url: this.url,

            headers: {
                'accept': 'text/plain'
            }

        })

            .then(response => {

                state(response.data)

            })
            .catch(error => error);
    }
}

class Editor {

    constructor() {

        this.email = localStorage.getItem('email');

        this.url = `https://apiapn.copisterialowcost.info/User/get-editor?emailUser=${this.email}`;

    }

    get(setState) {

        axios({

            method: 'get',

            url: this.url,

            headers: {
                'accept': 'text/plain'
            }

        })
            .then(response => {

                setState(response.data);

            })
            .catch(error => console.log(error, 'Errorr'))

    }

}

class RegisterEditor {


    constructor(alias) {

        this.email = localStorage.getItem('email');

        this.alias = alias;

        this.url = `https://apiapn.copisterialowcost.info/register-editor?Alias=${this.alias}&Email=${localStorage.getItem('email')}`;
    }

    post() {

        axios({

            method: 'post',

            url: this.url,

            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json' // Set the content type to JSON
            },



        })
            .then(response => {

                fireSwal('success', "Congratulation You're Editor Now", null).then(resp => {

                    sessionStorage.setItem('step', 4);
                    window.location.href = "/information";

                })

            })
            .catch(error => {

                fireSwal('warning', null, error?.response?.data?.message).then(resp => {

                    sessionStorage.setItem('step', 4);
                    window.location.href = "/information";

                })
            })

    }

}

class FormularioVenta {

    constructor() {

        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGFzZGFzZEBhc2Rhc2RhLmNvbSIsIm5iZiI6MTY5MzU2MzA1NiwiZXhwIjoxNjk0MTY3ODU2LCJpYXQiOjE2OTM1NjMwNTZ9.49xSHZXGY_cm5Q-DSGzZ9K8VcCGesWBOpQWfPIky-So';

        this.url = "https://apiapn.copisterialowcost.info/Apuntes/CrearApunte";

    }

    post(data, Editor_Id, setProgress, setIsLoaderLoading) {

        const formData = new FormData();

        formData.append('Titulo', 'titulo');
        formData.append('AnoAcademico', data.ano);
        formData.append('Descripcion', data.descripcion);
        formData.append('NombreProfesor', data.profesor);
        formData.append('Nota', data.notas);
        formData.append('Universidad_Code', data.universidad);
        formData.append('Facultad_Code', data.facultad);
        formData.append('Grado_Code', data.grado);
        formData.append('Asignatura_Code', data.asignatura);
        formData.append('Curso_Id', data.curso);
        formData.append('Editor_Id', Editor_Id)
        formData.append('PdfNota', data.archivoJustificante[0], 'nombre-del-archivo.pdf');
        formData.append('PdfApunte', data.archivoApunte[0], 'nombre-del-archivo.pdf');

        setIsLoaderLoading(true);

        axios({

            method: 'post',

            url: this.url,

            data: formData,

            headers: {

                Authorization: this.token,

                "Content-Type": "multipart/form-data",

            },

            onUploadProgress: (progressEvent) => {
                setProgress(progressEvent.progress * 100)
            }

        }).then(response => {

            setIsLoaderLoading(false);

            fireSwal('success', 'Enviado...', 'Apunte y temarios creados correctamente').then(resp => {

                window.location.href = "information?id=4";

            })

            return;

        }).catch(error => {
            console.log(error)
            fireSwal('error', 'Oops...', error?.response?.data?.title).then(resp => {

                // window.location.href = "information?id=4";

            })
        });

    }


}

class Resumen {

    constructor() {
        this.email = localStorage.getItem('email');
    }

    getEditor(setState) {

        axios({

            method: 'get',

            url: `https://apiapn.copisterialowcost.info/User/get-editor?emailUser=${this.email}`,


        })
            .then(response => {

                setState(response.data);

            })
            .catch(error => console.log(error, 'Errorr'))

    }

    resumenApuntes(id, setState) {

        const dataToSend = {
            editorId: id,
            tienda: "string",
            culture: "string"
        };

        axios({

            method: 'post',

            url: `https://apiapn.copisterialowcost.info/User/get-apuntes-editor`,

            headers: {
                'accept': 'text/plain',
                'Content-Type': 'application/json'
            },

            data: dataToSend

        })
            .then(response => {

                setState(response.data);

            })
            .catch(error => console.log(error, 'Errorr'))


    }

}

class Buscar {

    constructor(gradoCode, state, setLoader) {

        this.gradoCode = gradoCode;

        this.state = state;

        this.setLoader = setLoader;

    }


    get() {

        this.setLoader(true);

        axios({

            url: `https://apiapn.copisterialowcost.info/Apuntes/get-asignaturas?gradoCode=${this.gradoCode}`,

            method: "get"

        })

            .then(response => {

                this.setLoader(false);

                this.state(response.data);

                window.scrollTo({
                    top: 600,
                    behavior: "smooth"
                })

            })

            .catch(error => this.setLoader(false));

    }

    getByAsignaturaCode(code, firePopup) {

        axios({

            url: `https://apiapn.copisterialowcost.info/Apuntes/get-apuntes-by-asignatura?asignaturaCode=${code}`,

            method: "get"

        })

            .then(response => {

                this.state(response.data);

                if (!response.data?.length) {

                    setTimeout(() => {

                        firePopup();

                    }, 800);

                }

            })

            .catch(error => null);

    }

    getByCursoCode(code) {

        axios({

            url: `https://apiapn.copisterialowcost.info/Apuntes/get-apuntes-by-curso?cursoId=${code}`,

            method: "get"

        })

            .then(response => {

                this.state(response.data);

            })

            .catch(error => null);

    }

}

class RelatedProducts {

    constructor(gradoCode, cursoId, state) {

        this.gradoCode = gradoCode;

        this.cursoId = cursoId;

        this.state = state;

    }


    get() {

        axios({

            url: `https://apiapn.copisterialowcost.info/Apuntes/get-apuntes-recomendados?cursoId=${this.cursoId}&gradoCode=${this.gradoCode}`,

            method: "get"

        })

            .then(response => {

                this.state(response.data);

            })

            .catch(error => console.log(error));

    }


}

class ProductPDF {

    get(state, codigo) {
        // c69dd22503cf4935bb81737e3924774b
        axios({

            url: `https://apiapn.copisterialowcost.info/File/get-file-preview?codeApunte=${codigo}`,

            method: "get",

            responseType: 'arraybuffer',

        })

            .then(response => {

                state(response.data);

            })

            .catch(error => console.log(error));

    }

}

class PayMethodWays {

    get(state) {

        axios({

            url: `https://apiapn.copisterialowcost.info/PayMethod/get-metodos-pago`,

            method: "get"

        })

            .then(response => {

                return state(response.data);

            })

            .catch(error => console.log(error));

    }

}

class DeliveryWays {

    get(state) {

        axios({

            url: `https://apiapn.copisterialowcost.info/Delivery/get-formas-entrega`,

            method: "get"

        })

            .then(response => {

                return state(response.data);

            })

            .catch(error => console.log(error));

    }

}

class DeliveryGetPuntes {

    get(state) {

        axios({

            url: `https://apiapn.copisterialowcost.info/Delivery/get-puntos-recogida`,

            method: "get"

        })

            .then(response => {

                return state(response.data[0]);

            })

            .catch(error => console.log(error));

    }

}

export {

    Universities,
    Facultad,
    Grado,
    Asignaturas,
    Curso,
    FormularioVenta,
    Editor,
    Auth,
    User,
    Resumen,
    RegisterEditor,
    Buscar,
    RelatedProducts,
    ProductPDF,
    PayMethodWays,
    DeliveryWays,
    DeliveryGetPuntes

}