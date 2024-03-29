import { useState } from 'react';
import { Dropdown } from '../../../../components'
import { useDataGetter, useUpdatedProduct } from './data';
import { handleRemoveProduct } from '../../../../assetes/utils/utils';

export default function Product({ defaultItem, setTotalPrice }) {

    const [item, setItem] = useState(defaultItem);

    const { selecteCount, setSelecteCount, dispatchNewProducts, setCartState, productCount } = useDataGetter(item, setTotalPrice);

    // Update Product When Size Or Price Changeing
    const _ = useUpdatedProduct(selecteCount, item, setItem, setCartState);

    return (
        <div className='bg-[#f7f7f7] border rounded-[5px] p-3 flex items-center mb-3'>

            <img src={require('../../../../assetes/images/buscar_apuntes_-_cuaderno_verde.png')} alt='' className='me-1 sm:me-5 max-w-[70px] sm:max-w-[220px]' />

            <div className='flex-1'>

                <h1 className='font-bold mb-3 text-[14px] lg:text-[25px]'>{item?.asignatura}</h1>

                <div className='flex items-center'>

                    <div className='me-5'>

                        <p className='bg-[#004554] p-1 px-3 text-center mb-1 rounded-[5px] text-[11px] sm:text-[16px] text-white'>{item?.curso}</p>
                        <p className='bg-[#48c480] p-1 px-3 text-center rounded-[5px] text-[11px] sm:text-[16px] text-white'>{item?.abreviaturaUniversidad}</p>

                    </div>

                    <button className={`bg-white transition hover:bg-[#b3f2d0] text-black border rounded-[5px] sm:px-8 sm:py-4 p-1 px-3 text-center me-3`}>{defaultItem?.bnButton ? "BN" : "Color"}</button>

                </div>

                <div className='flex items-center justify-between mt-3'>

                    <div>

                        <Dropdown title={'Cant: '} selectedItem={selecteCount} setSelectedItem={setSelecteCount} list={productCount} styling={"w-fit sm:w-[120px] "} />

                        <button onClick={_ => handleRemoveProduct(item, dispatchNewProducts)} className='bg-[#dbdbdb] w-fit sm:w-[100px] p-2 border mx-3 text-[11px] sm:text-[16px] rounded-[5px]'>Eliminar</button>

                    </div>

                    <h1 className='lg:text-[40px] font-medium '>

                        {defaultItem?.bnButton !== false ? item?.newPrecioBN?.toFixed(2) || item?.precioBN?.toFixed(2) : item?.newPrecioCO?.toFixed(2) || defaultItem?.precioCO.toFixed(2)} €

                    </h1>

                </div>

            </div>

        </div>
    )
}


