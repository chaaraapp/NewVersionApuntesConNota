import { Dropdown } from '../../../../components'
import { handleRemoveFromCart, useDataGetter } from './data';


export default function Product({ item, setTotalPrice }) {

    const { handleBNClick, handlePrecioCOClick, selecteCount, setSelecteCount, dispatchNewProducts, btnPrice } = useDataGetter(item, setTotalPrice);
   
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

                    <button className='bg-[#b3f2d0] text-black border rounded-[5px] px-8 py-4 text-center me-3' onClick={handleBNClick}>BN</button>
                    <button className='bg-white text-black border rounded-[5px] px-8 py-4 text-center' onClick={handlePrecioCOClick}>Color</button>

                </div>

                <div className='flex items-center justify-between mt-3'>

                    <div>

                        <Dropdown title={'Cant: '} selectedItem={selecteCount} setSelectedItem={setSelecteCount} list={[{ nombre: "1" }, { nombre: "2" }, { nombre: "3" }]} styling={"w-[120px]"} />

                        <button onClick={_ => handleRemoveFromCart(item, dispatchNewProducts)} className='bg-[#dbdbdb] w-[100px] p-2 border mx-3 rounded-[5px]'>Eliminar</button>

                    </div>

                    <h1 className='lg:text-[40px] font-medium '>

                        {btnPrice ? item?.precioBN : item?.precioCO} €

                    </h1>

                </div>

            </div>

        </div>
    )
}
