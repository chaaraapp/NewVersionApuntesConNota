import { Autocomplete, Button, TextField } from '@mui/material'
import React, { Fragment, useState } from 'react';
import { useCursoLoader } from './data';

export default function StepTwo({ setStep }) {

    const [curso, setCurso,] = useState({ nombre: "" });

    const { cursoList } = useCursoLoader();

    return (
        <Fragment>

            <div className='bg-white p-5 flex items-center justify-center flex-col relative'>

                <img src={require('./images/ACN - Imagen portada inferior.png')} alt='' className='absolute left-0 bottom-[-140px] w-full h-[50%]' />
                <img src={require('./images/ACN - Imagen portada superior.png')} alt='' className='absolute left-0 top-[-100px] w-full h-[50%]' />

                <h1 className='text-[#004554] lg:text-[50px] font-medium text-center mb-2'>Que estudios estas cursando?</h1>

                <input type="text" className="border border-[#ccc] mb-3 w-[400px] p-3 rounded-[5px]" placeholder="Grado en...." />

                <Autocomplete disablePortal freeSolo
                    value={curso} options={Array.isArray(cursoList) ? cursoList : []} getOptionLabel={(option) => option?.nombre}
                    onChange={(e, value) => setCurso(value)}
                    renderInput={(params) => (
                        <TextField {...params} label={'Curso...'} />
                    )}
                    className='w-[400px] '

                />

            </div>


            <Button variant="contained" onClick={_ => setStep(2)} className="!bg-[#ffc559] !text-[#004554] !capitalize !text-[20px] !px-12 !rounded-none !font-bold !w-fit z-[20] !absolute !right-5 !bottom-4">Siguiente</Button>

        </Fragment>
    )
}
