import { useEffect, useState } from "react";
import { Asignaturas, Curso, Editor, Facultad, Grado, Universities } from "../../apis/apis";

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

const useUniversitiesLoader = () => {

    const [universidadList, setUniversidadList] = useState([]);

    // Fetch Universities
    const universitiesUtailty = new Universities();

    useEffect(() => {

        universitiesUtailty.get(setUniversidadList);

    }, []);

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

const useGetEditor = () => {

    const editorUtailty = new Editor();

    const [editorId, setEditorId] = useState({});

    useEffect(() => {

        editorUtailty.get(setEditorId);

    }, []);

    return { editorId, setEditorId };

}

export {
    useDataSetter,
    useUniversitiesLoader,
    useFacultadLoader,
    useGradoLoader,
    useAsignaturasLoader,
    useCursoLoader,
    useAnoLoader,
    validateForm,
    useGetEditor
}