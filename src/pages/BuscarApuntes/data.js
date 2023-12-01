import { Fragment, useEffect, useState } from "react";
import { Asignaturas, Buscar, Curso, Facultad, Grado, RelatedProducts, Universities } from "../../apis/apis";
import { SingleProduct } from "./components";
import { SwiperSlide } from "swiper/react";
import { SwiperWrapper } from "../../components";
import Swal from "sweetalert2";

const firePopup = () => {

    Swal.fire({
        title: "Ops...",
        text: "Lo sentimos, actualmente no tenemos apuntes para esta asignatura. ¿Quieres recibir un aviso cuando estén disponibles?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#48c480",
        cancelButtonColor: "#d33",
        confirmButtonText: "Recibir aviso",
        cancelButtonText: "Cancelación"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Aceptada!",
                text: "Muchas gracias",
                icon: "success"
            });
        }
    });

}



const useDataGetter = (asignaturas, curso, setBuscars, setSelectedAsignatura, setSelectedCurso) => {

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

            CursoUtailty.get(setCursoList);

        }

    }, [facultadValue?.codigo]);

    useEffect(() => {

        gradoValue?.codigo && AsignaturasUtailty.get(setAsignaturaList);

        setSelectedAsignatura({ nombre: 'Asignatura' });
        setSelectedCurso({ nombre: 'Curso' });

    }, [gradoValue?.codigo]);

    useEffect(() => {

        asignaturas?.codigo && BuscarUtailty.getByAsignaturaCode(asignaturas?.codigo, firePopup);

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

    useEffect(() => {

        if (curso?.id) {

            const RelatedUtailty = new RelatedProducts(gradoValue?.codigo, curso?.id, setBuscars);
            RelatedUtailty.get();

        }

    }, [curso?.id]);


    return {
        setUniversidadValue,
        asignaturaList,
        CursoList,
        formData,
        setFormData,
        universidadList,
        setFacultadValue,
        facultadValue,
        facultadesList,
        gradoValue,
        setGradoValue,
        gradoList
    }
}

const items = buscars => {

    return buscars?.map((item, index) => {

        return <SwiperSlide key={index}>

            <SingleProduct item={item} />

        </SwiperSlide>

    })

}

const renderBusers = (buscars, activeIndex, setActiveIndex) => {

    return (


        <Fragment>

            <div className="hidden lg:grid grid-cols-12 lg:gap-14 xl:gap-20 mt-5">

                {buscars.map((item, index) => {

                    return <SingleProduct key={index} item={item} />

                })}

            </div>

            {
                buscars.length
                    ?
                    <div className="lg:hidden">

                        <div className="flex items-center justify-between my-5 font-medium text-[#004554] border-b-4 border-b-[#48c480]">

                            <span> Resultados: {buscars?.length}</span>

                            <span>{activeIndex}</span>

                        </div>
                        <SwiperWrapper classNames="p-2" setActiveIndex={setActiveIndex} items={items(buscars)} slidesPerViewCount={[2.1, 3, 3, 3]} autoplayDelay={3000} />

                    </div>
                    :
                    null
            }
        </Fragment>

    )
}

const handleSubmit = (gradoCode, setBuscars, setLoader, setSelectedAsignatura, setSelectedCurso) => {

    const BuscarUtailty = new Buscar(gradoCode, setBuscars, setLoader);

    // Set Related Prodcuts Data To Localstorage
    localStorage.setItem('related', JSON.stringify({ gradoCode: gradoCode, curso: 65 }));

    setSelectedAsignatura({ nombre: 'Asignatura' });
    setSelectedCurso({ nombre: 'Curso' });

    BuscarUtailty.get();

    return () => { };

}

export {
    useDataGetter,
    handleSubmit,
    renderBusers
}