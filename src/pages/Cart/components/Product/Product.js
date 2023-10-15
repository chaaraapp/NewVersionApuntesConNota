import { useState } from 'react';
import { Dropdown } from '../../../../components'
import { useDataGetter, useUpdatedProduct } from './data';
import { handleRemoveProduct } from '../../../../assetes/utils/utils';

export default function Product({ defaultItem, setTotalPrice }) {

    const [item, setItem] = useState(defaultItem);

    const { handlePriceClick, selecteCount, setSelecteCount, dispatchNewProducts, setCartState, productCount } = useDataGetter(item, setTotalPrice);

    // Update Product When Size Or Price Changeing
    const _ = useUpdatedProduct(selecteCount, item, setItem, setCartState);

    return (
        <div className='bg-[#f7f7f7] border rounded-[5px] p-3 flex items-center mb-3'>

            <img src={require('../../../../assetes/images/buscar_apuntes_-_cuaderno_verde.png')} alt='' className='me-5 max-w-[220px]' />

            <div className='flex-1'>

                <h1 className='font-bold mb-3 text-[14px] lg:text-[25px]'>{item?.asignatura}</h1>

                <div className='flex items-center'>

                    <div className='me-5'>

                        <p className='bg-[#004554] p-1 px-3 text-center mb-1 rounded-[5px] text-white'>{item?.curso}</p>
                        <p className='bg-[#48c480] p-1 px-3 text-center rounded-[5px] text-white'>{item?.abreviaturaUniversidad}</p>

                    </div>

                    <button className={`${defaultItem?.bnButton !== false ? "bg-[#b3f2d0]" : "bg-white"} text-black border rounded-[5px] px-8 py-4 text-center me-3`} onClick={_ => handlePriceClick(item, true)}>BN</button>
                    <button className={`${defaultItem?.bnButton === false ? "bg-[#b3f2d0]" : "bg-white"} text-black border rounded-[5px] px-8 py-4 text-center`} onClick={_ => handlePriceClick(item, false)}>Color</button>

                </div>

                <div className='flex items-center justify-between mt-3'>

                    <div>

                        <Dropdown title={'Cant: '} selectedItem={selecteCount} setSelectedItem={setSelecteCount} list={productCount} styling={"w-[120px]"} />

                        <button onClick={_ => handleRemoveProduct(item, dispatchNewProducts)} className='bg-[#dbdbdb] w-[100px] p-2 border mx-3 rounded-[5px]'>Eliminar</button>

                    </div>

                    <h1 className='lg:text-[40px] font-medium '>

                        {defaultItem?.bnButton !== false ? item?.newPrecioBN || item?.precioBN : item?.newPrecioCO || defaultItem?.precioCO} €

                    </h1>

                </div>

            </div>

        </div>
    )
}


