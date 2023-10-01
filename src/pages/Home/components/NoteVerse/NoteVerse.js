import React from "react";
import mejoresImg from "../../../../assetes/images/mejores.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const NoteVerse = () => {
    return (
        <section className='my-10 overflow-hidden'>

            <div className='container min-h-[423px] flex justify-between flex-wrap items-center py-5 relative'>

                <div className='overlay-left absolute left-[-1000px] top-0 h-full bg-[var(--primary)]' style={{ borderRadius: "0 0 250px 0", width: "calc(50% + 1000px)" }}></div>

                <div
                    style={{ width: "49%", zIndex: 10, overflow: "hidden" }}
                    className='relative'  >

                    <img src={mejoresImg} alt='' className="inline" />

                </div>

                <div style={{ width: "40%" }} className='text-center right-note'>
                    <h1
                        className='font-bold mb-8'
                        style={{ fontSize: "45px", color: "#004554" }}   >
                        Los mejores apuntes, de los mejores alumnos.
                    </h1>

                    <p className='font-medium mb-4 px-3' style={{ fontSize: "20px" }}>
                        Comprobamos el expediente académico de nuestros editores para
                        garantizar la máxima calidad de nuestros apuntes.
                    </p>

                    <Link to={'/timer'}>
                        <Button variant="contained" className='!p-2 !px-5 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}>
                            Comprar apuntes
                        </Button>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default NoteVerse;
