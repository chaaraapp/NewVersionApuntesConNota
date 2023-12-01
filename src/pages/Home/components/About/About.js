import React from 'react'
import aboutTwo from "../../../../assetes/images/about-2.png"
import aboutOne from "../../../../assetes/images/about-1.png"
import aboutThree from "../../../../assetes/images/about-3.png"


export default function About() {

    return (
        <section section className="about sm:pb-[80px]" >

            <div className="container grid grid-cols-12 gap-5 about-container">

                <div className="col-span-12 lg:col-span-4">

                    <img src={aboutOne} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[20px] sm:text-[40px]'>Los mejores apuntes</h1>

                        <span className="text-[15px] sm:text-[20px] text-[#004554] font-medium">Apuntes elaborados por estudiantes que superaron la asignatura con</span>

                        <span className="m-0 font-bold text-[#004554] text-[20px] !font-sans"> una nota mínima de 7.</span>

                    </div>

                </div>

                <div className="col-span-12 lg:col-span-4 mt-[90px] lg:mt-0">

                    <img src={aboutTwo} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[20px] sm:text-[40px]'>Acabado profesional</h1>

                        <p className="text-[20px] sm:text-[20px]  text-[#004554] font-medium">

                            <span className="fw-bolder">Apuntes impresos </span>

                            con la mejor calidad, escritos a ordenador,

                            <span className="m-0 font-bold text-[#004554] text-[20px] !font-sans"> sin publicidad </span>

                            <span> y revisados por  nuestro equipo.</span>

                        </p>

                    </div>

                </div>

                <div className="col-span-12 lg:col-span-4 mt-[90px] lg:mt-0">

                    <img src={aboutThree} className='m-auto block mt-[-80px]' />

                    <div className="card-text text-center bg-white mt-[-70px] py-[10px] px-[2px] relative z-[100]">

                        <h1 className='font-bold mb-[10px] text-[#004554] text-[20px] sm:text-[40px]'>Recógelo o recíbelo</h1>

                        <p className="text-[15px] sm:text-[20px] text-[#004554] font-medium">

                            Puedes recibir tus apuntes

                            <span className="m-0 font-bold text-[#004554] text-[20px] !font-sans"> a domicilio </span>

                            o bien recogerlos en uno de nuestros

                            <span className="m-0 font-bold text-[#004554] text-[20px] !font-sans"> puntos de recogida.</span>

                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}
