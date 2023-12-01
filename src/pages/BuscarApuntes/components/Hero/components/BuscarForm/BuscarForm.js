import { useDataGetter, handleSubmit } from '../../../../data';
import { Autocomplete, Button, TextField } from "@mui/material";

export default function BuscarForm({ selectedAsignatura, selectedCurso, setBuscars, setLoader, classNames }) {

    const {
        setUniversidadValue,
        formData,
        setFormData,
        universidadList,
        setFacultadValue,
        facultadesList,
        facultadValue,
        gradoValue,
        setGradoValue,
        gradoList
    } = useDataGetter(selectedAsignatura, selectedCurso, setBuscars);


    return (
        <div className={`contact-form bg-[#f4f4f4] py-[20px] px-[40px]  lg:min-w-[330px] lg:me-[50px] mt-[70px] ${classNames}`}>

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

            <Button variant="contained" onClick={_ => handleSubmit(formData?.grado, setBuscars, setLoader)} className="!bg-[#ffc559] !text-black !font-bold !w-full">Buscar apuntes</Button>

        </div>
    )
}
