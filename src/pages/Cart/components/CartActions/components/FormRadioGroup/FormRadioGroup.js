import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { DeliveryGetPuntes, DeliveryWays, PayMethodWays } from '../../../../../../apis/apis';
import Dialog from '@mui/material/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function FormRadioGroup() {

    const payMethodUtailty = new PayMethodWays();

    const deliveryWaysUtailty = new DeliveryWays();

    const GetPuntesUtailty = new DeliveryGetPuntes();

    const [payMathods, setPayMathods] = useState([]);
    const [deliveryWays, setDeliveryWays] = useState([]);
    const [deliveryGetPuntes, setDeliveryGetPuntes] = useState([]);

    const [getCheckedLabel, setGetCheckedLabel] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        payMethodUtailty.get(setPayMathods);
        deliveryWaysUtailty.get(setDeliveryWays);
        GetPuntesUtailty.get(setDeliveryGetPuntes);

    }, []);

    return (

        <Fragment>

            <div className='p-2 px-8 border-b-8'>

                <h1 className='text-[#004554] sm:text-[25px] mb-2'>METODO DE PAGO</h1>

                <FormControl>

                    <RadioGroup defaultValue="tarjeta" name="radio-buttons-group">

                        {
                            payMathods?.map((item, index) => {

                                return (
                                    <FormControlLabel value={item?.valor} control={<Radio />} label={item?.htmlName} />
                                )

                            })
                        }

                    </RadioGroup>

                </FormControl>

            </div>

            <div className='p-2 px-8 border-b-8'>

                <h1 className='text-[#004554] sm:text-[25px] mb-2'>ENVIO O RECOGIDA</h1>

                <FormControl>

                    <RadioGroup defaultValue="domicilio" name="radio-buttons-group">
                        {
                            deliveryWays?.map((item, index) => {

                                return <FormControlLabel key={index} value={item?.id} onChange={e => setGetCheckedLabel(e.target.value)} control={<Radio />} label={item?.nombre} />

                            })
                        }
                    </RadioGroup>

                </FormControl>

            </div>


            {
                getCheckedLabel === "APN-ES-PR"
                    ?
                    <div className='p-2 px-8 border-b-8'>

                        <div onClick={handleClickOpen} className='border rounded-[5px] p-2 px-5 my-3 w-[350px] max-w-full hover:border-blue-600 transition cursor-pointer'>

                            <div className='flex items-center justify-between mb-5'>

                                <h3 className='opacity-50' style={{ letterSpacing: "1.5px" }}>{deliveryGetPuntes?.localidad}</h3>

                                <button className=' rounded-full bg-[#48c480] p-1 px-5 text-[13px] text-white'>GRATIS</button>

                            </div>

                            <p className='text-[12px] opacity-90 text-center'>{deliveryGetPuntes?.name} ({deliveryGetPuntes?.zona})</p>

                            <p className='text-[12px] opacity-70 text-center'>{deliveryGetPuntes?.direccion}</p>

                        </div>

                    </div>
                    : null
            }

            <Dialog open={open} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">

                <div className='p-4 rounded-[5px] relative w-[400px] max-w-full'>

                    <div className='flex items-center justify-between mb-3 border-b pb-2'>

                        <h3 className='font-medium opacity-70'>Ubicación</h3>

                        <FontAwesomeIcon icon={faClose} onClick={handleClose} className='cursor-pointer' />

                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.564861687079!2d-5.677805123420745!3d40.969110421834756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f263ae7ab9e37%3A0x1de514007cd0c506!2sAv.%20de%20los%20Maristas%2C%2060%2C%2037007%20Salamanca%2C%20Spain!5e0!3m2!1sen!2sus!4v1698736761059!5m2!1sen!2sus" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className='mt-3 pt-3 border-t flex items-center justify-end'>

                        <button onClick={handleClose} className='border rounded-[5px] p-2 px-5 font-medium text-[13px] opacity-70 transition hover:border-blue-500'>Cerrar</button>

                    </div>

                </div>

            </Dialog>


        </Fragment>

    )
}
