import React, { useState } from 'react'
import { Categories, Panel } from './components';
import AccordionQuestions from '../../components/Accordion/Accordion';
import { useLocation } from 'react-router-dom';

const arrOfTitles = [
    "Información Personal",
    "Mis pedidos",
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

            <div className='container'>

                <h1 className='font-bold lg:text-[50px] mb-10'> {arrOfTitles[sectionId || 0]} </h1>

                <div className='grid grid-cols-12 gap-5'>

                    <Panel setSteper={setSteper} steper={steper} />

                    <Categories setSteper={setSteper} steper={steper} />

                </div>

                <div className='mt-[100px]'><AccordionQuestions /></div>

            </div>

        </div>
    )
}
