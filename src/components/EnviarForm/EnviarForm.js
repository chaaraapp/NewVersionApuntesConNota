import { Autocomplete, Button, TextField } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Loader from '../Loader';

import { formatFileSize, VisuallyHiddenInput, useDataSetter, handleSubmit, useDataGetter, useGetLists, useResetInput } from './data';
import FormAutocomplete from './components/FormAutocomplete/FormAutocomplete';
import { fireSwal } from '../../assetes/utils/utils';


export default function EnviarForm({ isHasTitle }) {

    const {
        MAX_FILE_SIZE_BYTES, UniversidadValue, setUniversidadValue, Facultad, setFacultad,
        Ano, setAno, Profesor, setProfesor, SubirApunte, SubirJustificante, isLoaderLoading, setIsLoaderLoading,
        Grado, setGrado, Asignatura, setAsignatura, Curso, setCurso, Notas, setNotas, progress, setProgress
    } = useDataGetter();

    const { formData, setFormData, errors, setErrors } = useDataSetter();

    const { universidadList, facultadList, gradoList, asignaturasList, cursoList, editorId, anoList } = useGetLists(UniversidadValue, Asignatura, Grado, Facultad, Curso)

    const handleInputChange = (value, inputName, state) => {
        setFormData((prevData) => ({ ...prevData, [inputName]: value?.codigo || value?.id || value?.nombre }));
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: "" }));
        state(value)
    };

    const handleFileChange = ({ target: { value, name, files } }) => {

        if (files[0].size > MAX_FILE_SIZE_BYTES) {

            return fireSwal('error', 'Oops...', 'El tamaño del archivo tiene que ser menos de 100 MB.');

        } else {

            setFormData((prevData) => ({ ...prevData, [name]: files }));
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

        }

    };

    const _ = useResetInput(UniversidadValue, Facultad, Grado, Curso, setFacultad, setGrado, setAsignatura, setCurso, setAno, setProfesor, setNotas, Asignatura);

    return (

        <div className={`${isHasTitle ? "mt-10 mb-20" : ""} `}>

            <div className='container'>

                {isHasTitle
                    ?
                    <h1 className="font-medium mb-8 mt-8 text-[45px] text-[#004554] text-center">Rellena el formulario y empieza a vender</h1>
                    :
                    <h2 className='mb-5 font-bold text-[23px]'>Formulario de alta de apuntes</h2>
                }

                <div className='grid grid-cols-12 gap-5'>



                    <FormAutocomplete label={'Universidad:'} value={UniversidadValue} span={6} list={universidadList} setValue={setUniversidadValue} inputName={'universidad'} error={errors.universidad} handleInputChange={handleInputChange} />

                    <FormAutocomplete label={'Facultad:'} value={Facultad} span={6} list={facultadList} setValue={setFacultad} inputName={'facultad'} error={errors.facultad} handleInputChange={handleInputChange} />

                    <FormAutocomplete label={'Grado:'} value={Grado} span={6} list={gradoList} setValue={setGrado} inputName={'grado'} error={errors.grado} handleInputChange={handleInputChange} />

                    <FormAutocomplete label={'Asignatura:'} value={Asignatura} span={6} list={asignaturasList} setValue={setAsignatura} inputName={'asignatura'} error={errors.asignatura} handleInputChange={handleInputChange} />

                    <FormAutocomplete label={'Curso:'} value={Curso} span={4} list={cursoList} setValue={setCurso} inputName={'curso'} error={errors.curso} handleInputChange={handleInputChange} />


                    <div className='col-span-12 lg:col-span-2'>

                        <Autocomplete disablePortal freeSolo options={[]} value={Notas} onBlur={(e) => setFormData(perv => ({ ...perv, notas: e.target.value }))} renderInput={(params) => (<TextField error={errors?.notas?.length ? true : false}  {...params} label='Notas:' />)} />

                    </div>

                    <div className='col-span-12 lg:col-span-2'>

                        <Autocomplete disablePortal freeSolo value={Ano} options={Array.isArray(anoList) ? anoList : []} getOptionLabel={(option) => option.nombre} onChange={(e, value) => handleInputChange(value, 'ano', setAno)} renderInput={(params) => (<TextField error={errors?.ano?.length ? true : false}   {...params} label='Ano:' />)} />

                    </div>

                    <div className='col-span-12 lg:col-span-4'>

                        <Autocomplete disablePortal freeSolo value={Profesor} options={[]} onBlur={e => setFormData(perv => ({ ...perv, profesor: e.target.value }))} renderInput={(params) => (<TextField error={errors?.profesor?.length ? true : false}  {...params} label='Profesor:' />)} />

                    </div>

                    <div className="col-span-12">

                        <label htmlFor="descripcion" className="block text-start">  Descripcion General:  </label>

                        <textarea id="descripcion" onChange={e => setFormData(perv => ({ ...perv, descripcion: e.target.value }))} className={`form-control !h-[150px] transition-all min-shadow ${errors.descripcion ? "!border !border-[red]" : ""}`} name="descripcion" placeholder="Introduce una breve descripción acerca de la universidad, asignatura, apuntes, etc."></textarea>

                    </div>

                    <div className='col-span-12 lg:col-span-6 mb-3 lg:mb-0'>

                        <div className='input-file m-0'>

                            <div className='flex justify-between items-center p-2 px-3 bg-[#e4e3e4] rounded-[5px]' >

                                <div className='text-[14px]' style={{ fontSize: "14px" }}> {SubirApunte?.name?.slice(0, 20) || "Subir apunte"}.... </div>

                                <Button component='label' variant='contained' style={{ background: "#48c480", textTransform: "initial" }} startIcon={<CloudUploadIcon />} >

                                    Subir apunte

                                    <VisuallyHiddenInput accept='.pdf, .doc, .docx' type='file' name='archivoApunte' onChange={handleFileChange} />

                                </Button>

                            </div>

                            {

                                formData?.archivoApunte[0]?.size ?

                                    <p className=' font-bold mt-1 opacity-70 text-[14px]' style={{ textAlign: "start" }}>Tamaño del archivo: {formatFileSize(formData?.archivoApunte[0]?.size)}</p>

                                    :
                                    <p className={`error-message text-[red] text-[12px] mt-2 h-[16px] transition-all text-center ${errors?.archivoApunte?.length ? "block" : "hidden"}`}>{errors?.archivoApunte}</p>

                            }

                            <div />

                        </div>

                        <p className={`error-message ${errors?.archivoApunte?.length ? "hidden" : "block"}`}>{errors?.archivoApunte}</p>

                    </div>

                    <div className='col-span-12  lg:col-span-6'>

                        <div className='flex justify-between items-center p-2 px-3 bg-[#e4e3e4] rounded-[5px]' >

                            <div className='text-[14px]'> {SubirJustificante?.name?.slice(0, 15) || "Justificante de nota"}....   </div>

                            <Button component='label' style={{ background: "#48c480", textTransform: "initial" }} variant='contained' startIcon={<CloudUploadIcon />}   >

                                Subir justificante

                                <VisuallyHiddenInput type='file' accept='.pdf, .doc, .docx' name='archivoJustificante' onChange={handleFileChange} />

                            </Button>

                        </div>

                        {
                            formData?.archivoJustificante[0]?.size ?

                                <p className=' font-bold mt-1 opacity-70 text-[14px]' style={{ textAlign: "start" }}>  Tamaño del archivo: {formatFileSize(formData?.archivoJustificante[0]?.size)} </p>

                                :
                                null
                        }
                        <p className={`error-message text-[red] text-[12px] mt-2 h-[16px] transition-all text-center ${errors?.archivoJustificante?.length ? "block" : "hidden"}`} >{errors?.archivoJustificante} </p>

                    </div>

                    <div className='col-span-12 flex items-start justify-center'>

                        <Button type='submit' variant='contained' className='w-[75%] p-2  !my-10 border-none text-white' onClick={e => handleSubmit(formData, setErrors, editorId, setProgress, setIsLoaderLoading)} style={{ textTransform: "initial", color: "white", background: "#48c480", marginBottom: `${isHasTitle ? "100px" : "0px"}`, }}>
                            Enviar solicitud
                        </Button>

                    </div>

                </div>

            </div>


            {
                isLoaderLoading
                    ?
                    <Loader progress={progress} />
                    :
                    null
            }

        </div >

    )
}
