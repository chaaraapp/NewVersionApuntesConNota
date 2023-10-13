import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { RelatedProducts } from '../../components';
import Product from './components/Product';
import { useState } from 'react';



export default function Cart() {

    const products = JSON.parse(localStorage.getItem('products'));

    const [totalPrice, setTotalPrice] = useState(0);


    return (

        <div>

            <div className='bg-[var(--primary)] px-10 py-3 mb-5'>

                <div className='container flex items-center '>

                    <FontAwesomeIcon icon={faCartArrowDown} className='text-white text-[16px] sm:text-[30px]' />

                    <h1 className='ms-4 text-white text-[16px] sm:text-[30px]'>Mi carrito</h1>

                </div>

            </div>

            <div className='container grid grid-cols-12 gap-5'>

                <div className='col-span-6'>

                    {
                        products && products?.map((item, index) => {
                            return <Product setTotalPrice={setTotalPrice} key={index} item={item} />
                        })
                    }

                </div>

                <div className='col-span-6 border-2 rounded-[5px]'>

                    <div className='mb-3 border-b-8 pt-5 px-8'>

                        <h1 className='text-[#004554] sm:text-[25px] mb-2'>RESUMEN DEL PEDIDO</h1>

                        {
                            products && products.map((product, index) => {

                                return <div key={index} className='flex items-center justify-between'>

                                    <p className='font-medium'>{index + 1} X {product?.asignatura}</p>

                                    <p className='font-medium'>{product?.price}</p>

                                </div>
                            })
                        }


                        <h1 className='sm:text-[40px] text-end'>{totalPrice} €</h1>
                    </div>

                    <div className='bg-[#e5e5e5] px-8 p-2 flex items-center justify-between'>

                        <input type='text' className='px-5 py-2 bg-white flex-1' placeholder='Tienes algun codigo promocioal?' />

                        <button className='bg-[var(--primary)] font-medium ms-3 px-10 py-2 text-white'>Aplicar</button>

                    </div>

                    <div className='p-2 px-8 border-b-8'>

                        <h1 className='text-[#004554] sm:text-[25px] mb-2'>METODO DE PAGO</h1>

                        <FormControl>

                            <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                                <FormControlLabel value="outlined" control={<Radio />} label="Tarjeta de credito o debito" />
                                <FormControlLabel value="soft" control={<Radio />} label="BIZUM" />
                            </RadioGroup>

                        </FormControl>

                    </div>

                    <div className='p-2 px-8 border-b-8'>

                        <h1 className='text-[#004554] sm:text-[25px] mb-2'>ENVIO O RECOGIDA</h1>

                        <FormControl>

                            <RadioGroup defaultValue="domicilio" name="radio-buttons-group">
                                <FormControlLabel value="domicilio" control={<Radio />} label="Envio a domicilio" />
                                <FormControlLabel value="venta" control={<Radio />} label="Recogida en punto de venta" />
                            </RadioGroup>

                        </FormControl>

                    </div>

                    <div className='p-2 px-8 border-b-8'>

                        <h1 className='text-[#004554] sm:text-[25px] mb-2'>POLITICA DE PRIVACIDAD</h1>

                        <p className='font-medium'>Tus datos personales se ultilizaran para tramitar tu pedido y los propositos expresamente detallados en nuestras
                            <span className='text-[#004554] font-bold'> politicas de privacidad</span>
                        </p>

                    </div>

                    <div className='p-2 px-8'>

                        <h1 className='text-[#004554] sm:text-[25px] mb-2'>ENVIO O RECOGIDA</h1>

                        <FormControl>

                            <RadioGroup defaultValue="" name="radio-buttons-group">
                                <FormControlLabel value="condiciones" control={<Radio />} label="He leido y estoy de acuerdo con los terminos y condiciones de la web." />
                            </RadioGroup>

                        </FormControl>

                        <button className='p-2 px-10 block my-3 m-auto bg-[#ffc559] text-[#004554] text-[20px] font-bold'>Realizar pedido</button>

                    </div>

                </div>

                <div className='col-span-12'>

                    <RelatedProducts />

                </div>

            </div>

        </div>
    )
}
