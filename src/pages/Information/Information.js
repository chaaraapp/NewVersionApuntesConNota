import React, { useState } from 'react'
import { Categories } from './components';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const arrOfTitles = [
    "Información Personal",
    "Información personal",
    "Datos de envío",
    "Librería de Editor",
    "Mi monedero",
];

export default function Information() {

    const location = useLocation().search;
    const sectionId = +location?.slice(4);
    const [steper, setSteper] = useState(sectionId || 1);


    return (
        <div className='mb-20'>

            {
                sectionId == 1 || sectionId === 4
                    ?
                    <div className='bg-[var(--primary)] px-10 py-3 mb-5'>

                        <div className='container flex items-center '>

                            {sectionId === 1 ? <FontAwesomeIcon icon={faUser} className='text-white text-[16px] sm:text-[30px]' /> : null}

                            <h1 className='ms-4 text-white text-[16px] sm:text-[30px]'>
                                {sectionId === 1 ? "Mi cuenta" : "Mis apuntes subidos"}
                            </h1>

                        </div>

                    </div> :
                    null
            }

            <div className='container'>

                <h1 className='font-bold lg:text-[50px] mb-10'> {arrOfTitles[sectionId || 0]} </h1>

                <div className='grid grid-cols-12 gap-5'>

                    {/* <Panel setSteper={setSteper} steper={steper} /> */}

                    <Categories setSteper={setSteper} steper={steper} />

                </div>

            </div>

        </div>
    )
}
