import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperWrapper from '../SwiperWrapper'
import { SingleProduct } from '../../pages/BuscarApuntes/components'
import { RelatedProducts } from '../../apis/apis';

const items = data => {
    return (
        data.map((item, index) => {

            return (
                <SwiperSlide key={item}>

                    <SingleProduct key={index} item={item} />

                </SwiperSlide>
            )
        })
    );
}



export default function RelatedProduct(props) {

    const [data, setData] = useState([]);

    const relatedData = JSON.parse(localStorage.getItem('related'));

    const getRelatedProducts = new RelatedProducts(relatedData?.gradoCode, relatedData?.curso, setData);

    useEffect(() => {

        getRelatedProducts.get()

    }, []);


    return (
        <section {...props}>

            <h1 className='text-[30px] text-[#002733] border-b-8 pb-3 border-b-[#48c480] mb-20'>Te puede interesar....</h1>

            <SwiperWrapper items={items(data)} includeNavigation={true} isLooped={true} autoplayDelay={5000} slidesPerViewCount={[1.5, 2.3, 2.8, 3.5]} />

        </section>
    )
}
