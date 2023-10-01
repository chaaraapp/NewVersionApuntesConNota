import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Swal from 'sweetalert2';
import { useAnoLoader, useAsignaturasLoader, useCursoLoader, useDataSetter, useFacultadLoader, useGetEditor, useGradoLoader, useUniversitiesLoader, validateForm } from './data';
import Loader from '../Loader';
import { FormularioVenta } from '../../apis/apis';

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

function formatFileSize(sizeInBytes) {
    if (sizeInBytes === 0) {
        return "0 Bytes";
    }

    const sizeNames = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const index = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    const size = (sizeInBytes / Math.pow(1024, index)).toFixed(2);

    return `${size} ${sizeNames[index]}`;
}


export default function EnviarForm({ isHasTitle }) {

    const MAX_FILE_SIZE_MB = 100;
    const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
    const [UniversidadValue, setUniversidadValue] = useState('');
    const [Facultad, setFacultad] = useState('');
    const [Grado, setGrado] = useState('');
    const [Asignatura, setAsignatura] = useState('');
    const [Curso, setCurso] = useState('');
    const [Notas, setNotas] = useState('');
    const [Ano, setAno] = useState('');
    const [Profesor, setProfesor] = useState('');
    const [SubirApunte, setSubirApunte] = useState('');
    const [SubirJustificante, setSubirJustificante] = useState('');
    const [isLoaderLoading, setIsLoaderLoading] = useState(false);
    const [progress, setProgress] = useState(null);




    const { formData, setFormData, errors, setErrors } = useDataSetter();
    const { universidadList, setUniversidadList } = useUniversitiesLoader();
    const { facultadList, setFacultadList } = useFacultadLoader(universidadList, UniversidadValue?.codigo);
    const { gradoList, setGradoList } = useGradoLoader(Facultad);
    const { asignaturasList, setasignaturasList } = useAsignaturasLoader(Grado);
    const { cursoList, setCursoList } = useCursoLoader(Asignatura);
    const { editorId, setEditorId } = useGetEditor();
    const { anoList } = useAnoLoader(Curso);


    const handleInputChange = (value, inputName, state) => {
        setFormData((prevData) => ({ ...prevData, [inputName]: value?.codigo || value?.id || value?.nombre }));
        setErrors((prevErrors) => ({ ...prevErrors, [inputName]: "" }));
        state(value)
    };

    const handleSubmit = () => {
        
        validateForm(formData, setErrors);

        if (validateForm(formData, setErrors)) {

            if (formData.notas >= 7 && formData.notas <= 10) {

                const sendData = new FormularioVenta();

                sendData.post(formData, editorId?.id, setProgress, setIsLoaderLoading);

            } else {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Tu nota tiene que ser entre 7 y 10.",
                });

                setErrors(perv => ({ ...perv, notas: "Tu nota tiene que ser entre 7 y 10." }));

            }

        }

    }

    const handleFileChange = ({ target: { value, name, files } }) => {

        if (files[0].size > MAX_FILE_SIZE_BYTES) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El tamaño del archivo tiene que ser menos de 100 MB.",
            });
            return;
        } else {

            setFormData((prevData) => ({ ...prevData, [name]: files }));
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

        }

    };

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

                    <div className='col-span-6'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(universidadList) ? universidadList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => { handleInputChange(value, 'universidad', setUniversidadValue); }}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.universidad?.length ? true : false}
                                    {...params}
                                    label='Universidad:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-6'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(facultadList) ? facultadList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => handleInputChange(value, 'facultad', setFacultad)}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.facultad?.length ? true : false}
                                    {...params}
                                    label='Facultad:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-6'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(gradoList) ? gradoList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => handleInputChange(value, 'grado', setGrado)}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.grado?.length ? true : false}
                                    {...params}
                                    label='Grado:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-6'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(asignaturasList) ? asignaturasList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => handleInputChange(value, 'asignatura', setAsignatura)}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.asignatura?.length ? true : false}
                                    {...params}
                                    label='Asignatura:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-4'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(cursoList) ? cursoList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => handleInputChange(value, 'curso', setCurso)}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.curso?.length ? true : false}
                                    {...params}
                                    label='Curso:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-2'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={[]}
                            value={Notas}
                            onBlur={(e) => setFormData(perv => ({ ...perv, notas: e.target.value }))}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.notas?.length ? true : false}
                                    {...params}
                                    label='Notas:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-2'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={Array.isArray(anoList) ? anoList : []}
                            getOptionLabel={(option) => option.nombre}
                            onChange={(e, value) => handleInputChange(value, 'ano', setAno)}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.ano?.length ? true : false}
                                    {...params}
                                    label='Ano:'
                                />
                            )}
                        />

                    </div>

                    <div className='col-span-4'>

                        <Autocomplete
                            disablePortal
                            freeSolo
                            options={[]}
                            value={Profesor}
                            onBlur={e => setFormData(perv => ({ ...perv, profesor: e.target.value }))}
                            renderInput={(params) => (
                                <TextField
                                    error={errors?.profesor?.length ? true : false}
                                    {...params}
                                    label='Profesor:'
                                />
                            )}
                        />

                    </div>

                    <div className="col-span-12">

                        <label htmlFor="descripcion" className="block text-start">  Descripcion General:  </label>

                        <textarea id="descripcion" onChange={e => setFormData(perv => ({ ...perv, descripcion: e.target.value }))} className={`form-control !h-[150px] transition-all min-shadow ${errors.descripcion ? "!border !border-[red]" : ""}`} name="descripcion" placeholder="Introduce una breve descripción acerca de la universidad, asignatura, apuntes, etc."></textarea>

                    </div>

                    <div className='col-span-12 lg:col-span-6 mb-3 lg:mb-0'>

                        <div className='input-file m-0'>
                            <div className='flex justify-between items-center p-2 px-3' style={{ background: "#e4e3e4", borderRadius: "5px" }} >
                                <div style={{ fontSize: "14px" }}>

                                    <i className='fa-solid fa-file-lines mr-2'></i>

                                    <span>

                                        {SubirApunte?.name?.slice(0, 20) || "Subir apunte"}....

                                    </span>
                                </div>

                                <Button component='label' variant='contained'
                                    style={{ background: "#48c480", textTransform: "initial" }} startIcon={<CloudUploadIcon />} >

                                    Subir apunte

                                    <VisuallyHiddenInput accept='.pdf, .doc, .docx' type='file' name='archivoApunte' onChange={handleFileChange} />

                                </Button>

                            </div>

                            {formData?.archivoApunte[0]?.size ? (
                                <p className=' font-bold mt-1 opacity-70 text-[14px]' style={{ textAlign: "start" }}>
                                    Tamaño del archivo: {formatFileSize(formData?.archivoApunte[0]?.size)}
                                </p>
                            ) : (
                                ""
                            )}
                            <p className={`error-message text-[red] text-[12px] mt-2 h-[16px] transition-all text-center ${errors?.archivoApunte?.length ? "block" : "hidden"}`} >

                                {errors?.archivoApunte}

                            </p>
                        </div>

                        <p className={`error-message ${errors?.archivoApunte?.length ? "hidden" : "block"}`}>

                            {errors?.archivoApunte}

                        </p>
                    </div>

                    <div className='col-span-12 lg:col-span-6'>
                        <div className='flex justify-between items-center p-2 px-3' style={{ background: "#e4e3e4", borderRadius: "5px" }} >

                            <div style={{ fontSize: "14px" }}>

                                <i className='fa-solid fa-paperclip mr-2'></i>

                                {SubirJustificante?.name?.slice(0, 15) || "Justificante de nota"}....

                            </div>

                            <Button component='label' style={{ background: "#48c480", textTransform: "initial" }}
                                variant='contained' startIcon={<CloudUploadIcon />}   >

                                Subir justificante
                                <VisuallyHiddenInput type='file' accept='.pdf, .doc, .docx' name='archivoJustificante' onChange={handleFileChange} />

                            </Button>

                        </div>

                        {formData?.archivoJustificante[0]?.size ? (
                            <p className=' font-bold mt-1 opacity-70 text-[14px]' style={{ textAlign: "start" }}>
                                Tamaño del archivo: {formatFileSize(formData?.archivoJustificante[0]?.size)}
                            </p>
                        ) : (
                            ""
                        )}
                        <p className={`error-message text-[red] text-[12px] mt-2 h-[16px] transition-all text-center ${errors?.archivoJustificante?.length ? "block" : "hidden"}`} >

                            {errors?.archivoJustificante}

                        </p>

                    </div>

                    <div className='col-span-12 flex items-start justify-center'>

                        <Button
                            type='submit'
                            variant='contained'
                            className='w-[75%] p-2  !my-10'
                            onClick={handleSubmit}
                            style={{
                                background: "#48c480",
                                border: "none",
                                textTransform: "initial",
                                outline: "none",
                                color: "white",
                                marginBottom: `${isHasTitle ? "100px" : "0px"}`,
                            }}>
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

        </div>

    )
}
