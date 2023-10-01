import React, { useState } from 'react'
import { Categories, Panel } from './components';

const arrOfTitles = [
    "Información Personal",
    "Mis pedidos",
    "Datos de envío",
    "Librería de Editor",
    "Mi monedero",
];

export default function Information() {

    const [steper, setSteper] = useState(+sessionStorage.getItem("step") || 1);

    return (
        <div className='mb-20'>

            <div className='container'>

                <h1 className='font-bold lg:text-[50px] mb-10'>
                    {arrOfTitles[+steper - 1] || arrOfTitles[0]}
                </h1>

                <div className='grid grid-cols-12 gap-5'>

                    <Panel setSteper={setSteper} steper={steper} />

                    <Categories setSteper={setSteper} steper={steper} />

                </div>

            </div>

        </div>
    )
}
