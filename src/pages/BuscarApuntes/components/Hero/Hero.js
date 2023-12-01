import { useDataGetter, handleSubmit } from "../../data";
import { Fragment, useEffect, useState } from "react";
import { renderBusers, swiperItems } from "./data";
import { Spiners, SwiperWrapper } from "../../../../components";
import { Autocomplete, Button, TextField } from "@mui/material";
import Product from "../Product/Product";

export default function Hero({ buscars, setBuscars }) {

    const [selectedAsignatura, setSelectedAsignatura] = useState({ nombre: 'Asignatura' });

    const [selectedCurso, setSelectedCurso] = useState({ nombre: "Curso" });

    const [loader, setLoader] = useState(false);

    const {
        asignaturaList,
        CursoList,
        setUniversidadValue,
        setFormData,
        universidadList,
        facultadValue,
        setFacultadValue,
        facultadesList,
        gradoList,
        gradoValue,
        setGradoValue,
        formData
    } = useDataGetter(selectedAsignatura, selectedCurso, setBuscars, setSelectedAsignatura, setSelectedCurso);

    useEffect(() => {

        const body = document.body;

        loader ? body.style.cssText += "max-height: 100vh; overflow:hidden;" : body.style.cssText += "max-height: initial; overflow:initial;";

    }, [loader]);

    return (

        <section className='product-landing-page  mb-5 relative'>

            {loader && <Spiners />}

            <div className="grid grid-cols-12 gap-5">

                <div className=" bg-[#48c480] !text-white col-span-12 lg:hidden flex items-center">

                    <img src={require('../../../../assetes/images/buscar apuntes - cuaderno verde.png')} alt="" className="w-[60px]" />

                    <div className="flex-1" style={{ width: "calc(100% - 60px)" }}>

                        <SwiperWrapper items={swiperItems} slidesPerViewCount={[1, 1, 1, 1]} smCustomView={1.2} autoplayDelay={0} />

                    </div>

                </div>

                <div className='absolute left-0 top-[15px] w-full h-[150px] bg-[#48c480] z-[-1] hidden lg:block'></div>

                <div className={`contact-form  !text-white lg:mx-5 h-fit bg-[#f4f4f4] py-[20px] lg:min-w-[330px] lg:me-[50px] lg:mt-16 col-span-12 lg:col-span-4 xl:col-span-3 me-0 px-5`}>

                    <Autocomplete disablePortal className='mb-2 bg-white' onChange={(e, value) => { setUniversidadValue(value); setFormData((prevData) => ({ ...prevData, universidad: value?.codigo })); }}

                        noOptionsText='no se ha encontrado ningún resultado' options={Array.isArray(universidadList) ? universidadList : []} getOptionLabel={(option) => option.nombre} renderInput={(params) => (<TextField   {...params} label='Universidad:' />)} />

                    <Autocomplete disablePortal className='mb-2 bg-white' value={facultadValue} onChange={(e, value) => { setFacultadValue(value); setFormData((prevData) => ({ ...prevData, facultad: value?.codigo })); }}

                        noOptionsText='Facultad Farmacia' options={Array.isArray(facultadesList) ? facultadesList : []} getOptionLabel={(option) => option.nombre} renderInput={(params) => (<TextField {...params} label='Facultad:' />)} />

                    <Autocomplete disablePortal className='mb-2 bg-white'

                        value={gradoValue} options={Array.isArray(gradoList) ? gradoList : []} onChange={(e, value) => { setGradoValue(value); setFormData((prevData) => ({ ...prevData, grado: value?.codigo })); }}
                        noOptionsText='Grado en Farmacia' getOptionLabel={(option) => option.nombre} renderInput={(params) => (<TextField  {...params} label='Grado:' />)} />

                    <div className='flex items-center mb-3'>

                        <input type='checkbox' name='' id='recordar' />

                        <label htmlFor='recordar' className="text-black text-[14px] font-medium ms-3 select-none">Recordar mi seleccion</label>

                    </div>

                    <Button variant="contained" onClick={_ => handleSubmit(formData?.grado, setBuscars, setLoader, setSelectedAsignatura, setSelectedCurso)} className="!bg-[#ffc559] !text-black !font-bold !w-full">Buscar apuntes</Button>

                </div>
                {buscars?.length ?
                    renderBusers(selectedAsignatura, asignaturaList, setSelectedAsignatura, CursoList, selectedCurso, setSelectedCurso)
                    :
                    <div className="col-span-12 lg:col-span-8 xl:col-span-8" >

                        <p className='lg:text-white text-[#48c480] lg:whitespace-nowrap mb-20 sm:sm:text-[40px] h-fit lg:text-[30px] xl:text-[44px] text-[28px] lg:mt-[50px]'> ¿Por qué somos mejores que otras plataformas?   </p>

                        <Product />

                    </div>
                }

            </div>


        </section>
    )
}
