import React from "react";
import mejoresImg from "../../../../assetes/images/mejores.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NoteVerse = () => {

    return (

        <section className='my-10 overflow-hidden'>

            <div className='container min-h-[423px] flex justify-between flex-wrap items-center py-5 relative'>

                <div className='overlay-left hidden lg:block absolute left-[-1000px] top-0 h-full bg-[var(--primary)]' style={{ borderRadius: "0 0 250px 0", width: "calc(50% + 1000px)" }}></div>

                <div className='relative overflow-hidden z-10 w-full lg:w-[49%] bg-[var(--primary)] py-5 flex items-center justify-center lg:block lg:p-0 lg:bg-transparent'  >

                    <img src={mejoresImg} alt='' className="inline" />

                </div>

                <div className='text-center right-note w-full lg:w-[40%] mt-10 lg:mt-0'>

                    <h1 className='font-bold mb-8 text-[#004554] text-[20px] sm:text-[45px]'>Los mejores apuntes, de los mejores alumnos.</h1>

                    <p className='font-medium mb-4 px-3 text-[20px]'> Comprobamos el expediente académico de nuestros editores para garantizar la máxima calidad de nuestros apuntes.</p>

                    <Link to={'/buscar-apuntes'}>

                        <Button variant="contained" className='!p-2 !px-5 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}>Comprar apuntes</Button>

                    </Link>

                </div>

            </div>

        </section>

    );
};

export default NoteVerse;
