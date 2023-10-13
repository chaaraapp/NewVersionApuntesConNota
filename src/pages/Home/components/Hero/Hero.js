import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Hero() {
    
    return (
        <section className="landing-page text-white bg-[var(--primary)] p-5 py-20 lg:p-32">

            <div className="container text-center py-5 landing">

                <h1 className="mb-10 !text-[40px] sm:!text-[60px] lg:!text-[100px] font-medium leading-[1.1]">¿Quieres ganar mucha <br className='hidden lg:inline' /> pasta con tus apuntes?</h1>

                <Link to={'/formulario-venta'}>

                    <Button variant="contained" className='!p-2 !px-5 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}>
                        Vender apuntes
                    </Button>

                </Link>

            </div>

        </section>
    )
}
