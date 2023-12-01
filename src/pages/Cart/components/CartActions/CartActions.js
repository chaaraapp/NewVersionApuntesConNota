import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FormRadioGroup, ProductInfo } from './components'
import { Link } from 'react-router-dom'

export default function CartActions({ products, totalPrice }) {

    return (

        <>

            <div className='mb-3 border-b-8 pt-5 px-8'>

                <h1 className='text-[#004554] text-[15px] sm:text-[25px] mb-2'>RESUMEN DEL PEDIDO</h1>

                <ProductInfo products={products} />

                <h1 className='sm:text-[40px] text-end'>{totalPrice.toFixed(2)} €</h1>
            </div>

            <div className='bg-[#e5e5e5] px-2 sm:px-8 p-2 flex items-center justify-between'>

                <input type='text' className='px-5 py-2 bg-white flex-1 max-w-[70%] sm:max-w-[initial]' placeholder='Tienes algun codigo promocioal?' />

                <button className='bg-[var(--primary)] font-medium ms-1 sm:ms-3 px-4 sm:px-10 py-2 text-white'>Aplicar</button>

            </div>

            <FormRadioGroup />

            <div className='p-2 px-8 border-b-8'>

                <h1 className='text-[#004554] sm:text-[25px] mb-2'>POLITICA DE PRIVACIDAD</h1>

                <p className='font-medium'>Tus datos personales se ultilizaran para tramitar tu pedido y los propositos expresamente detallados en nuestras
                    <Link to={'/privacidad'} className='text-[#004554] font-bold'> politicas de privacidad</Link>
                </p>

            </div>

            <div className='p-2 px-8'>

                <FormControl>

                    <RadioGroup defaultValue="" name="radio-buttons-group">

                        <FormControlLabel value="condiciones" control={<Radio />} label="He leido y estoy de acuerdo con los terminos y condiciones de la web." />

                    </RadioGroup>

                </FormControl>

                <button className='p-2 px-10 block my-3 m-auto bg-[#ffc559] text-[#004554] text-[20px] font-bold'>Realizar pedido</button>

            </div>

        </>
    )
}
