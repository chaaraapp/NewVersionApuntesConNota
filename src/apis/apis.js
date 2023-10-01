import axios from "axios";
import Swal from "sweetalert2";

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

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.response?.data?.message,
                })

            });

    }

    postRegister(data) {

        const { nombre, apellidos, email, password, direccion = 'unknow' } = data;

        const params = new URLSearchParams({
            Nombre: `${nombre} ${apellidos}`,
            Email: email,
            Pass: password,
            Direccion: direccion,
        });

        axios({

            method: "post",

            url: `${this.url}?${params.toString()}`

        })
            .then(response => {

                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);

                window.location.href = "/";

            })
            .catch(error => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.response?.data?.message,
                })

            })

    }

    postLoginGoogle(tokenGoogle) {

        axios({

            method: "post",

            url: `https://apiapn.copisterialowcost.info/login-google?Token=${tokenGoogle}`,

        })
            .then(response => {

                console.log(response, 'response');

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
            nifEnvio: data?.nifEnvio || "stringst",
            nombreEnvio: data?.nombreEnvio || "string",
            direccionEnvio: data?.direccionEnvio || 'Dirección',
            codigoPostalEnvio: data?.codigoPostalEnvio || "string",
            ciudadEnvio: data?.ciudadEnvio || "string",
            provinciaEnvio: data?.provinciaEnvio || "string",
            paisEnvio: data?.paisEnvio || "string",
            movilEnvio: data?.movilEnvio || "stringstr",
            telefonoEnvio: data?.telefonoEnvio || "0123456789",
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

                Swal.fire({
                    icon: "success",
                    title: "Enviado...",
                    text: "Updated Successfuly",
                }).then(resp => {

                    window.location.reload();

                })

            }).catch(error => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Please Fill Out The Required Data And The least Characters of The input must be more than or equal 5`,
                });

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

                state(response.data)

            })
            .catch(error => error);
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

            Swal.fire({
                icon: "success",
                title: "Enviado...",
                text: "Apunte y temarios creados correctamente",
            }).then(resp => {

                sessionStorage.setItem('step', 4);

                window.location.href = "information";

            })

            return;

        }).catch(error => console.log(error, 'Error'));

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
    User

}