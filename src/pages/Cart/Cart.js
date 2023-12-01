import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RelatedProducts } from '../../components';
import { CartActions } from './components';
import { useSelector } from 'react-redux';
import { renderProducts } from './data';
import { useState } from 'react';

export default function Cart() {

    const products = useSelector(store => store.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    return (

        <div>

            <div className='bg-[var(--primary)] px-10 py-3 mb-5'>

                <div className='container flex items-center '>

                    <FontAwesomeIcon icon={faCartArrowDown} className='text-white text-[16px] sm:text-[30px]' />

                    <h1 className='ms-4 text-white text-[16px] sm:text-[30px]'>Mi carrito</h1>

                </div>

            </div>

            <div className='container grid grid-cols-12 gap-5'>

                <div className='col-span-12 xl:col-span-6'> {renderProducts(products, setTotalPrice)} </div>

                <div className='col-span-12 xl:col-span-6 border-2 rounded-[5px]'>

                    <CartActions products={products} totalPrice={totalPrice} />

                </div>

                <RelatedProducts className='col-span-12' />

            </div>

        </div>

    )
}
