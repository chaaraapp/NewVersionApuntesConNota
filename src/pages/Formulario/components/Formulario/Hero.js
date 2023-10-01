import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Hero() {
    const categories = [
        { name: "Nota minima:7", key: "A" },
        { name: "Subir el temario completo", key: "M" },
        { name: "Escritura a ordenador", key: "P" },
    ];

    return (
        <section className='p-4 bg-[#4bc383] text-white'>
            <div className='container grid grid-cols-12 items-center'>
                <h1 className='col-span-12 lg:col-span-4 lg:px-24 text-[50px] font-bold leading-[1]'>
                    No regales
                    <br className='hidden lg:block' />
                    tus apuntes
                    <br className='hidden lg:block' />
                    en otras
                    <br className='hidden lg:block' />
                    plataformas
                </h1>

                <div className='hidden lg:grid place-content-center col-span-4'>
                    <img src={require("../../../../assetes/images/hero-bg.png")} className='max-w-full' />
                </div>

                <div className='text-white font-bold mb-[13px] text-[20px] col-span-12 lg:col-span-4'>
                    <h2>Requisitos:</h2>

                    <div className='requisitos-card'>
                        <div className=''>
                            {categories.map((category) => {
                                return (
                                    <div key={category.key} className='checbox flex items-center mb-1'>
                                        <div
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                                border: "1px solid white",
                                                borderRadius: "5px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <label
                                            htmlFor={category.key}
                                            className='cursor-pointer mx-3 mb-0'
                                        >
                                            {category.name}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
