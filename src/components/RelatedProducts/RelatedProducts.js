import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperWrapper from '../SwiperWrapper'
import { SingleProduct } from '../../pages/BuscarApuntes/components'

const defaultItem = {
    "asignatura": "",
    "asignaturaCode": "A001-G023-F008-U021",
    "universidad": "Universidad de Zaragoza",
    "abreviaturaUniversidad": "UNIZAR",
    "facultad": "Escuela Universitaria Politécnica De Teruel ",
    "grado": "Grado En Ingeniería Informática",
    "precioBN": 4,
    "precioCO": 5.55,
    "nota": 8.5,
    "profesor": "prueba infor 3",
    "editor": "Oscar Alfonso Chesaxddddddd",
    "curso": "1º Curso",
    "cursoId": "65"
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => {

    return (
        <SwiperSlide key={item}>

            <SingleProduct key={index} item={defaultItem} />

        </SwiperSlide>
    )
});



export default function RelatedProducts() {
    return (
        <section>

            <h1 className='text-[30px] text-[#002733] border-b-8 pb-3 border-b-[#48c480] mb-20'>Te puede interesar....</h1>

            <SwiperWrapper items={items} includeNavigation={true} isLooped={true} autoplayDelay={5000} slidesPerViewCount={[2, 3, 4, 4]} />

        </section>
    )
}
