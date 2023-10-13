import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useDataSetter, handelChangeInput, useHandleSubmit } from './data';

export default function InformaciónPersonal() {

    const [userInfo, setUserInfo] = useState({});

    const { inputsValue, setInputsValue } = useDataSetter(userInfo);

    const { handelSubmit } = useHandleSubmit(inputsValue, setUserInfo);

    return (
        <section>

            <h2 className='mb-8 font-medium text-[20px]'>  Datos de facturación  </h2>

            <form onSubmit={handelSubmit} className='grid grid-cols-12 gap-5'>

                <div className='col-span-12 lg:col-span-6 mb-2'>

                    <label htmlFor='inputNombre' className='mb-2 inline-block'>Nombre</label>

                    <input type='text' value={inputsValue.nombreEnvio} onChange={e => handelChangeInput('nombreEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='Nombre' id='inputNombre' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputDNI/NIF' className='mb-2 inline-block'>DNI/NIF</label>

                    <input type='text' value={inputsValue.nifEnvio} onChange={e => handelChangeInput('nifEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='DNI/NIF' id='inputDNI/NIF' />

                </div>

                <div className='col-span-12 lg:col-span-6 mb-2'>

                    <label htmlFor='inputDirección' className='mb-2 inline-block'> Dirección</label>

                    <input type='text' value={inputsValue.direccionEnvio} onChange={e => handelChangeInput('direccionEnvio', e.target.value, setInputsValue)} className='form-control' id='inputDirección' placeholder='inputDirección' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputTeléfono ' className='mb-2 inline-block'>Teléfono</label>

                    <input type='text' value={inputsValue.telefonoEnvio} onChange={e => handelChangeInput('telefonoEnvio', e.target.value, setInputsValue)} className='form-control' id='inputTeléfono' placeholder='Teléfono' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputMóvil' className='mb-2 inline-block'> Móvil </label>

                    <input type='text' value={inputsValue.movilEnvio} onChange={e => handelChangeInput('movilEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='Móvil' id='inputMóvil' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputCódigo' className='mb-2 inline-block'>Código Postal</label>

                    <input type='text' value={inputsValue.codigoPostalEnvio} onChange={e => handelChangeInput('codigoPostalEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='Código Postal' id='inputCódigo' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputPoblación' className='mb-2 inline-block'>Población </label>

                    <input type='text' className='form-control' placeholder='Población' id='inputPoblación' />

                </div>

                <div className='col-span-12 lg:col-span-3 mb-2'>

                    <label htmlFor='inputProvincia' className='mb-2 inline-block'>Provincia </label>

                    <input type='text' value={inputsValue.provinciaEnvio} onChange={e => handelChangeInput('provinciaEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='Provincia' id='inputProvincia' />

                </div>

                <div className='col-span-12 lg:col-span-6 mb-2'>

                    <label htmlFor='inputPaís' className='mb-2 inline-block'>País:</label>

                    <input type='text' value={inputsValue.paisEnvio} onChange={e => handelChangeInput('paisEnvio', e.target.value, setInputsValue)} className='form-control' placeholder='País' id='inputPaís' />

                </div>

                <div className='col-span-12'>

                    <Button type='submit' variant="contained" className='!bg-[#cdfecc] !text-black !font-bold'>Guardar cambios</Button>

                </div>

            </form>

        </section>
    )
}
