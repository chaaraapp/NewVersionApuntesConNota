import React from 'react'
import aboutTwo from "../../../../assetes/images/about-2.png"
import aboutOne from "../../../../assetes/images/about-1.png"
import aboutThree from "../../../../assetes/images/about-3.png"


export default function About() {

    return (
        <section section className="about pb-[80px]" >

            <div className="container grid grid-cols-12 gap-5 about-container">

                <div className="col-span-4">

                    <img src={aboutOne} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[40px]'>Los mejores apuntes</h1>

                        <p className="mb-0 text-[18px] text-[#004554] font-medium">Apuntes elaborados por estudiantes que superaron la asignatura con</p>

                        <h5 className="m-0 font-bold text-[#004554] text-[14px] !font-sans">una nota mínima de 7.</h5>

                    </div>

                </div>

                <div className="col-span-4">

                    <img src={aboutTwo} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[40px]'>Acabado profesional</h1>

                        <p className="mb-0 text-[18px] text-[#004554] font-medium">
                            <span className="fw-bolder">Apuntes impresos </span>
                            con la mejor calidad, escritos a ordenador,
                            <span className="fw-bolder"> sin publicidad </span>
                            y revisados por
                            nuestro equipo.

                        </p>

                    </div>

                </div>

                <div className="col-span-4">

                    <img src={aboutThree} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[40px]'>Recógelo o recíbelo</h1>

                        <p className="mb-0 text-[18px] text-[#004554] font-medium">
                            Puedes recibir tus apuntes
                            <span className="fw-bolder"> a domicilio </span>
                            o bien recogerlos en uno de nuestros
                            <span className="fw-bolder"> puntos de recogida.</span>
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}
