import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../assetes/utils/utils';


export default function SingleProduct({ item }) {

    const [btnPrice, setBnPrice] = useState(false);

    const dispatch = useDispatch();


    return (
        <div className='col-span-3 mb-[50px] rounded-[5px] shadow p-3 py-4'>

            <div className='product-head mb-2 flex justify-between'>

                <div>

                    <p className="px-[20px] py-[5px] bg-[#004554] rounded-[5px] text-white font-bold mb-[10px] text-center">{item?.curso}</p>

                    <p className="px-[20px] py-[5px] bg-[#48c480] rounded-[5px] text-white font-bold mb-[10px] text-center">{item?.abreviaturaUniversidad}L</p>

                </div>

                <img src={require('../../../../assetes/images/buscar apuntes - cuaderno verde.png')} className=" w-[150px] mx-[20px]" alt='' />

            </div>

            <div className='mb-4'>

                <h2 className='font-medium mb-1 !text-[#b9b8bc] !text-[16px]'>{item?.grado}</h2>

                <h3 className='font-medium mb-1 !text-[16px]'>{item?.asignatura}</h3>

            </div>

            <div className='mb-4'>

                <h2 className='font-medium mb-1 !text-[#b9b8bc] !text-[16px]'>  Profesor:  </h2>

                <h3 className='font-medium mb-1 !text-[16px]'> {item?.profesor}</h3>

            </div>

            <div className='mb-4'>

                <h2 className='font-medium mb-1 !text-[#b9b8bc] !text-[16px]'>

                    Editor:  <span className='!text-black'>{item?.editor}</span>

                </h2>

                <h2 className='font-medium mb-1 !text-[#b9b8bc] !text-[16px]'>

                    Nota: <span className='!text-black'>{item?.nota}</span>

                </h2>

                <h2 className='font-medium mb-1 !text-[#b9b8bc] !text-[16px]'>

                    N<sup>o</sup> pags:{" "}
                    <span className='!text-black'>126</span>

                </h2>

            </div>

            <div className='product-btns flex items-center justify-center'>

                <button className="me-[2px] py-[5px] px-[20px] border border-[#ccc] rounded-[5px]" onClick={(_) => setBnPrice(true)}>BN</button>

                <button className="me-[2px] py-[5px] px-[20px] border border-[#ccc] rounded-[5px]" onClick={(_) => setBnPrice(false)}>Color</button>

            </div>

            <div className='my-4 border-b'>  </div>

            <div className='flex items-center justify-between'>

                <div>

                    <h3 className='font-medium!text-[16px]'>

                        {btnPrice ? item?.precioBN : item?.precioCO} €

                    </h3>

                    <h2 className='font-medium !text-[#b9b8bc] !text-[16px16px;'>

                        IVA incluido

                    </h2>

                </div>

                <div className='product-actions'>

                    <Link to={'/buscar-apuntes/product?id=1'} onClick={_ => localStorage.setItem('active-proudct', JSON.stringify(item))} className="py-[13px] px-[12px] border border-[#ffc559] bg-white text-[#ffc559] rounded-[5px]">

                        <FontAwesomeIcon icon={faEye} />

                    </Link>

                    <button onClick={_ => addToCart(item, dispatch)} className="py-[10px] px-[12px] border border-[#ffc559] bg-white text-[#ffc559] rounded-[5px]">

                        <FontAwesomeIcon icon={faCartShopping} />

                    </button>

                </div>

            </div>

        </div>
    )
}
