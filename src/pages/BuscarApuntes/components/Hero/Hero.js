import { Autocomplete, Button, TextField } from "@mui/material";
import { handleSubmit, useDataGetter } from "../../data";
import { useState } from "react";
import { renderBusers } from "./data";

export default function Hero({ buscars, setBuscars }) {

    const [selectedAsignatura, setSelectedAsignatura] = useState({ nombre: 'Asignatura' });

    const [selectedCurso, setSelectedCurso] = useState({ nombre: "Curso" });

    const {
        setUniversidadValue, formData, asignaturaList, CursoList, setFormData, universidadList,
        setFacultadValue, facultadesList, facultadValue, gradoValue, setGradoValue, gradoList } = useDataGetter(selectedAsignatura, selectedCurso, setBuscars);

    return (
        <section className='product-landing-page px-5 mb-5 !text-white relative flex'>

            <div className='absolute left-0 top-[15px] w-full h-[55%] bg-[#48c480] z-[-1]'></div>

            <div className='contact-form bg-[#f4f4f4] py-[20px] px-[40px] min-w-[330px] me-[50px] mt-[70px]'>

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

                <Button variant="contained" onClick={_ => handleSubmit(formData?.grado, setBuscars)} className="!bg-[#ffc559] !text-black !font-bold !w-full">Buscar apuntes</Button>

            </div>

            {buscars?.length ?
                renderBusers(selectedAsignatura, asignaturaList, setSelectedAsignatura, CursoList, selectedCurso, setSelectedCurso)
                :
                <h1 className='text-white sm:sm:text-[40px] text-[20px] mt-[70px] text-center font-bold'>  Por que somos mejores que otras plataformas?   </h1>
            }
        </section>
    )
}
