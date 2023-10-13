import { useEffect, useState } from "react";
import { Asignaturas, Buscar, Curso, Facultad, Grado, Universities } from "../../apis/apis";
import { SingleProduct } from "./components";
import Product from "./components/Product/Product";

const useDataGetter = (asignaturas, curso, setBuscars) => {

    const [universidadValue, setUniversidadValue] = useState({ "nombre": "" });
    const [universidadList, setUniversidadList] = useState([]);
    const [facultadValue, setFacultadValue] = useState({ "nombre": "" });
    const [facultadesList, setFacultadesList] = useState([]);
    const [gradoValue, setGradoValue] = useState({ "nombre": "" });
    const [gradoList, setGradoList] = useState([]);
    const [asignaturaList, setAsignaturaList] = useState([]);
    const [CursoList, setCursoList] = useState([]);
    const UniversidadUtailty = new Universities();
    const AsignaturasUtailty = new Asignaturas(gradoValue?.codigo);
    const CursoUtailty = new Curso(asignaturas?.codigo);
    const FacultadUtailty = new Facultad(universidadValue?.codigo);
    const BuscarUtailty = new Buscar(null, setBuscars);
    const GradoUtailty = new Grado(facultadValue?.codigo);

    const [formData, setFormData] = useState({
        universidad: "",
        facultad: "",
        grado: "",
    });

    useEffect(() => {

        UniversidadUtailty.get(setUniversidadList);

    }, []);

    useEffect(() => {

        if (universidadValue?.codigo) {

            FacultadUtailty.get(setFacultadesList);

        }

    }, [universidadValue?.codigo]);

    useEffect(() => {

        if (facultadValue?.codigo) {

            GradoUtailty.get(setGradoList);

        }

    }, [facultadValue?.codigo]);

    useEffect(() => {

        gradoValue?.codigo && AsignaturasUtailty.get(setAsignaturaList);

    }, [gradoValue]);

    useEffect(() => {

        asignaturas?.codigo && CursoUtailty.get(setCursoList);

        asignaturas?.codigo && BuscarUtailty.getByAsignaturaCode(asignaturas?.codigo,);

    }, [asignaturas]);

    useEffect(() => {

        curso?.codigo && BuscarUtailty.getByCursoCode(curso?.codigo);

    }, [asignaturas]);

    // Reset Inputs
    useEffect(() => {

        setFacultadValue({ nombre: "" });
        setGradoValue({ nombre: "" });
        setFacultadesList([]);
        setGradoList([]);

    }, [universidadValue]);

    // Reset Inputs
    useEffect(() => {

        setGradoValue({ nombre: "" });
        setGradoList([]);

    }, [facultadValue]);

    return { setUniversidadValue, asignaturaList, CursoList, formData, setFormData, universidadList, setFacultadValue, facultadValue, facultadesList, gradoValue, setGradoValue, gradoList }
}

const renderBusers = (buscars) => {
    return (
        buscars?.length ? (Array.isArray(buscars) &&

            buscars.map((item, index) => {

                return <SingleProduct key={index} item={item} />
            })
        ) : <Product />
    )
}

const handleSubmit = (gradoCode, setBuscars) => {

    const BuscarUtailty = new Buscar(gradoCode, setBuscars);


    BuscarUtailty.get();

    return () => { };

}

export {
    useDataGetter,
    handleSubmit,
    renderBusers
}