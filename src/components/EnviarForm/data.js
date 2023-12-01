import { useEffect, useState } from "react";
import { Asignaturas, Curso, Editor, Facultad, FormularioVenta, Grado, Universities } from "../../apis/apis";
import { styled } from "@mui/material/styles";
import { fireSwal } from "../../assetes/utils/utils";

const useDataSetter = () => {
    const [formData, setFormData] = useState({
        asignatura: "",
        ano: "",
        profesor: "",
        universidad: "",
        facultad: "",
        grado: "",
        curso: "",
        notas: "",
        descripcion: "",
        archivoApunte: "",
        archivoJustificante: "",
    });

    const [errors, setErrors] = useState(
        {
            universidad: "",
            facultad: "",
            grado: "",
            asignatura: "",
            curso: "",
            notas: "",
            ano: "",
            descripcion: "",
            profesor: "",
            archivoApunte: "",
            archivoJustificante: "",
        }
    );
    return { formData, setFormData, errors, setErrors };
}

const useDataGetter = () => {

    const MAX_FILE_SIZE_MB = 100;
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
    const [UniversidadValue, setUniversidadValue] = useState({ nombre: "" });
    const [Facultad, setFacultad] = useState({ nombre: "" });
    const [Grado, setGrado] = useState({ nombre: "" });
    const [Asignatura, setAsignatura] = useState({ nombre: "" });
    const [Curso, setCurso] = useState({ nombre: "" });
    const [Notas, setNotas] = useState('');
    const [Ano, setAno] = useState({ nombre: "" });
    const [Profesor, setProfesor] = useState('');
    const [SubirApunte, setSubirApunte] = useState('');
    const [SubirJustificante, setSubirJustificante] = useState('');
    const [isLoaderLoading, setIsLoaderLoading] = useState(false);
    const [progress, setProgress] = useState(null);

    return {
        MAX_FILE_SIZE_BYTES,
        UniversidadValue, setUniversidadValue,
        Facultad, setFacultad,
        Grado, setGrado,
        Asignatura, setAsignatura,
        Curso, setCurso,
        Notas, setNotas,
        Ano, setAno,
        Profesor, setProfesor,
        SubirApunte, setSubirApunte,
        SubirJustificante, setSubirJustificante,
        isLoaderLoading, setIsLoaderLoading,
        progress, setProgress
    }

}

const useUniversitiesLoader = () => {

    const [universidadList, setUniversidadList] = useState([]);
    const { UniversidadValue, setFacultad, setGrado, setAsignatura } = useDataGetter();

    // Fetch Universities
    const universitiesUtailty = new Universities();

    useEffect(() => {

        universitiesUtailty.get(setUniversidadList);

    }, []);

    useEffect(() => {


    }, [UniversidadValue]);

    return { universidadList, setUniversidadList }

}

const useFacultadLoader = (universidad, universidadId) => {

    const [facultadList, setFacultadList] = useState([]);

    const facultadUtailty = new Facultad(universidadId);

    useEffect(() => {

        if (universidad?.length && universidadId) {

            facultadUtailty.get(setFacultadList);
        }

    }, [universidad, universidadId]);

    return { facultadList, setFacultadList }

}

const useGradoLoader = (facultad) => {

    const [gradoList, setGradoList] = useState([]);

    const gradoUtailty = new Grado(facultad?.codigo);

    useEffect(() => {

        if (facultad?.codigo) {

            gradoUtailty.get(setGradoList);

        }

    }, [facultad?.codigo]);

    return { gradoList, setGradoList }

}

const useAsignaturasLoader = (grado) => {

    const [asignaturasList, setasignaturasList] = useState([]);

    const asignaturaUtailty = new Asignaturas(grado?.codigo);

    useEffect(() => {

        if (grado?.codigo) {

            asignaturaUtailty.get(setasignaturasList);

        }

    }, [grado?.codigo]);

    return { asignaturasList, setasignaturasList }

}

const useCursoLoader = (asignaturas) => {

    const [cursoList, setCursoList] = useState([]);

    const CursoUtailty = new Curso();

    useEffect(() => {

        if (asignaturas?.codigo) {

            CursoUtailty.get(setCursoList);

        }

    }, [asignaturas?.codigo]);

    return { cursoList, setCursoList }

}

const useAnoLoader = (curso) => {

    const [anoList, setAnoList] = useState([]);

    const years = [
        { nombre: "2015-2016" },
        { nombre: "2016-2017" },
        { nombre: "2017-2018" },
        { nombre: "2018-2019" },
        { nombre: "2019-2020" },
        { nombre: "2020-2021" },
        { nombre: "2021-2022" },
        { nombre: "2022-2023" },
        { nombre: "2023-2024" },
    ]

    useEffect(() => {

        if (curso?.id) {

            setAnoList(years);

        } else {

            setAnoList([]);

        }

    }, [curso?.id]);

    return { anoList }

}

const validateForm = (formData, setFormErrors) => {
    const errors = {};

    if (!formData.asignatura) {
        errors.asignatura = "Debe ingresar una asignatura";
    }

    if (!formData.ano) {
        errors.ano = "Debe ingresar un año";
    }

    if (!formData.profesor) {
        errors.profesor = "Debe ingresar un profesor";
    }

    if (!formData.universidad) {
        errors.universidad = "Debe seleccionar una universidad";
    }

    if (!formData.facultad) {
        errors.facultad = "Debe seleccionar una facultad";
    }

    if (!formData.grado) {
        errors.grado = "Debe seleccionar un grado";
    }

    if (!formData.curso) {
        errors.curso = "Debe seleccionar un curso";
    }
    if (!formData.notas) {
        errors.notas = "Debe ingresar la nota";
    }

    if (!formData.archivoApunte) {
        errors.archivoApunte = "Debe adjuntar el apunte";
    }
    if (!formData.descripcion) {
        errors.descripcion = "Debe adjuntar el apunte";
    }

    if (!formData.archivoJustificante) {
        errors.archivoJustificante = "Debe adjuntar el justificante";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
};

const handleSubmit = (formData, setErrors, editorId, setProgress, setIsLoaderLoading) => {

    validateForm(formData, setErrors);

    if (validateForm(formData, setErrors)) {

        if (formData.notas >= 7 && formData.notas <= 10) {

            const sendData = new FormularioVenta();

            sendData.post(formData, editorId?.id, setProgress, setIsLoaderLoading);

        } else {

            fireSwal('error', 'Oops...', 'Tu nota tiene que ser entre 7 y 10.');

            setErrors(perv => ({ ...perv, notas: "Tu nota tiene que ser entre 7 y 10." }));

        }

    }

}

const useGetEditor = () => {

    const editorUtailty = new Editor();

    const [editorId, setEditorId] = useState({});

    useEffect(() => {

        editorUtailty.get(setEditorId);

    }, []);

    return { editorId, setEditorId };

}

function formatFileSize(sizeInBytes) {
    if (sizeInBytes === 0) {
        return "0 Bytes";
    }

    const sizeNames = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const index = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    const size = (sizeInBytes / Math.pow(1024, index)).toFixed(2);

    return `${size} ${sizeNames[index]}`;
}

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

const useGetLists = (UniversidadValue, Asignatura, Grado, Facultad, Curso) => {

    const { universidadList } = useUniversitiesLoader();
    const { facultadList } = useFacultadLoader(universidadList, UniversidadValue?.codigo);
    const { gradoList } = useGradoLoader(Facultad);
    const { asignaturasList } = useAsignaturasLoader(Grado);
    const { cursoList } = useCursoLoader(Asignatura);
    const { editorId } = useGetEditor();
    const { anoList } = useAnoLoader(Curso);

    return { universidadList, facultadList, gradoList, asignaturasList, cursoList, editorId, anoList }

}

const useResetInput = (UniversidadValue, Facultad, Grado, Curso, setFacultad, setGrado, setAsignatura, setCurso, setAno, setProfesor, setNotas, Asignatura) => {

    // reset Inputs depended on Univeridad
    useEffect(() => {

        setFacultad({ nombre: "" });
        setGrado({ nombre: "" });
        setAsignatura({ nombre: "" });
        setCurso({ nombre: "" });
        setNotas('');
        setAno({ nombre: "" });
        setProfesor('');

    }, [UniversidadValue]);
    // reset Inputs depended on Facultad
    useEffect(() => {

        setGrado({ nombre: "" });
        setAsignatura({ nombre: "" });
        setCurso({ nombre: "" });
        setNotas('');
        setAno({ nombre: "" });
        setProfesor('');

    }, [Facultad]);
    // reset Inputs depended on Grado
    useEffect(() => {

        setAsignatura({ nombre: "" });
        setCurso({ nombre: "" });
        setNotas('');
        setAno({ nombre: "" });
        setProfesor('');

    }, [Grado]);
    // reset Inputs depended on Asignatura
    useEffect(() => {

        setCurso({ nombre: "" });
        setNotas('');
        setAno({ nombre: "" });
        setProfesor('');

    }, [Asignatura]);
    // reset Inputs depended on Curso
    useEffect(() => {

        setNotas('');
        setAno({ nombre: "" });
        setProfesor('');

    }, [Curso]);
    return {};
}

export {
    useDataSetter,
    useUniversitiesLoader,
    useFacultadLoader,
    useGradoLoader,
    useAsignaturasLoader,
    useCursoLoader,
    useAnoLoader,
    handleSubmit,
    useGetEditor,
    formatFileSize,
    VisuallyHiddenInput,
    useDataGetter,
    useGetLists,
    useResetInput
}