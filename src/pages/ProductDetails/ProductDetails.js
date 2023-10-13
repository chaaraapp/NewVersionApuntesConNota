import Button from '@mui/material/Button';
import { RelatedProducts } from '../../components';

export default function ProductDetails() {

    const item = JSON.parse(localStorage.getItem('active-proudct'));

    return (
        <div>

            <div className='bg-[var(--primary)] mb-10 h-[80px]'>

                <div className='container flex items-center'>

                    <img src={require('../../assetes/images/buscar apuntes - cuaderno verde.png')} alt='' className='w-[103px] relative -top-4' />

                    <h1 className='ms-4 text-white text-[16px] sm:text-[30px] relative -top-4'>{item.asignatura || "Asignatura"}</h1>

                </div>

            </div>

            <div className='container grid grid-cols-12 sm:gap-10'>

                <div className='col-span-3 border rounded-[5px] p-5 flex items-center justify-center'>

                    <img src={require('../../assetes/images/book.PNG')} alt='' className='' />

                </div>

                <div className='col-span-9'>

                    <h1 className='text-[30px] text-[#151616] mb-5'>{item.asignatura || "Asignatura"}</h1>

                    <div className='flex items-center mb-3'>

                        <p className='bg-[#004554] p-2 px-5 text-[20px] text-center me-5 rounded-[5px] text-white'>{item.curso}</p>
                        <p className='bg-[#48c480] p-2 px-5 text-[20px] text-center rounded-[5px] text-white'>{item.abreviaturaUniversidad}</p>

                    </div>

                    <text className='mb-3'>Grado {item.grado}</text>

                    <p className='mb-3'>

                        <span className='text-[#a3a3a3]'>Profesor:</span>
                        <text> {item.profesor}</text>

                    </p>

                    <p className='mb-3'>

                        <span className='text-[#a3a3a3]'>Editor:</span>
                        <text> {item.editor}</text>

                    </p>

                    <p className='mb-3'>

                        <span className='text-[#a3a3a3]'>Nota:</span>
                        <text> {item.nota}</text>

                    </p>

                    <p className='mb-5'>

                        <span className='text-[#a3a3a3]'>N<sup>o</sup> pags::</span>
                        <text> 126</text>

                    </p>

                    <div className='flex items-center'>

                        <button className='bg-[#eaeaea] text-black border rounded-[5px] px-8 py-4 text-center me-3'>BN</button>

                        <button className='bg-white text-black border rounded-[5px] px-8 py-4 me-3 text-center'>Color</button>

                        <Button className='!bg-[#ffc559] !text-[#013945] !text-[20px] !p-2 !px-5 sm:!px-20 !font-bold' style={{ textTransform: "initial" }}>Anadir al carrito</Button>

                    </div>


                </div>

                <div className='col-span-12'>

                    <RelatedProducts />

                </div>

            </div>

        </div>
    )

}
