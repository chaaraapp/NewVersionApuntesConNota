import { InformaciónPersonal, MisPedidos, SaldoFavor } from './components'
import Formulario from '../../../Formulario'
import { ToBeEditor } from '../../../../components'
import { useFetchEditorInfo } from './data';
import { Fragment, useState } from 'react';

export default function Categories({ steper }) {

    const { editorId, resumenApuntesData } = useFetchEditorInfo(steper);
    const [inputsValue, setInputsValue] = useState('');

    return (

        <Fragment>

            <div className='col-span-12 lg:col-span-12 px-5 py-6 rounded-[5px] border'>

                {steper === 1 || steper === 3 ? <InformaciónPersonal /> : null}

                {steper === 2 ? <MisPedidos /> : null}

                {steper === 4 ? editorId?.id ? <Formulario resumenApuntesData={resumenApuntesData} isHasTitle={false} /> : <ToBeEditor isHasTitle={false} /> : null}

                {steper === 5 ? <SaldoFavor /> : null}

            </div>

            {
                steper === 1 || steper === 3 ?
                    <div className='col-span-12 lg:col-span-12 px-5 py-6 rounded-[5px] border'>

                        <h1 className='ms-4 mb-10 text-[16px] sm:text-[30px]'>Dirección de envío</h1>

                        <div className='grid grid-cols-12 gap-5'>

                            <div className='col-span-12 lg:col-span-6 mb-2'>

                                <label htmlFor='Via' className='mb-2 inline-block'>Via</label>

                                <input type='text' value={inputsValue.nombreEnvio} className='form-control' placeholder='Via' id='Via' />

                            </div>

                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Numero' className='mb-2 inline-block'>Numero</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Numero' id='Numero' />

                            </div>

                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Portal' className='mb-2 inline-block'>Portal</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Portal' id='Portal' />

                            </div>

                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Piso' className='mb-2 inline-block'>Piso</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Piso' id='Piso' />

                            </div>
                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Provicia' className='mb-2 inline-block'>Provincia</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Provicia' id='Provicia' />

                            </div>
                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Municipio' className='mb-2 inline-block'>Municipio</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Municipio' id='Municipio' />

                            </div>
                            <div className='col-span-12 lg:col-span-3 mb-2'>

                                <label htmlFor='Codigo postal' className='mb-2 inline-block'>Codigo postal</label>

                                <input type='text' value={inputsValue.nifEnvio} className='form-control' placeholder='Codigo postal' id='Codigo postal' />

                            </div>

                        </div>

                    </div>
                    :
                    null
            }

        </Fragment>

    )
}
