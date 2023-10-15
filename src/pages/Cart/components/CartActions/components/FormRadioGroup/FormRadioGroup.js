import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { Fragment } from 'react'

export default function FormRadioGroup() {

    return (

        <Fragment>

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

        </Fragment>

    )
}
