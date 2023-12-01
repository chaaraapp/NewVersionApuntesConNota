import Button from '@mui/material/Button';
import { RelatedProducts } from '../../components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../assetes/utils/utils';
import { useEffect, useState } from 'react';
import { ProductPDF } from '../../apis/apis';
import { PDFViewr } from './components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye } from '@fortawesome/free-solid-svg-icons';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function ProductDetails() {

    const item = JSON.parse(localStorage.getItem('active-proudct'));

    const [open, setOpen] = useState(false);

    const [isBnPrice, setIsBnPrice] = useState(true);

    const ProductPDFUtality = new ProductPDF();

    const [pdf, setPdf] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {

        ProductPDFUtality.get(setPdf, item.codigo);

    }, []);

    return (
        <div>

            <div className='bg-[var(--primary)] mb-10 h-[80px]'>

                <div className='container flex items-center'>

                    <img src={require('../../assetes/images/buscar apuntes - cuaderno verde.png')} alt='' className='w-[103px] relative -top-4' />

                    <h1 className='ms-4 text-white text-[16px] sm:text-[30px] relative -top-4'>{item.asignatura || "Asignatura"}</h1>

                </div>

            </div>

            <div className='container grid grid-cols-12 sm:gap-10'>

                <div className='col-span-12 lg:col-span-5 xl:col-span-3 h-[200px] lg:h-[initial] mb-10 lg:mb-0 border rounded-[5px] p-1 lg:p-5 flex items-center justify-center relative'>

                    <PDFViewr defaultScale={0.4} classNames={'w-[50%] lg:w-full max-h-full'} defaultPdf={pdf} />

                    <div onClick={_ => setOpen(true)} className='w-[30px] h-[30px] hidden lg:flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-3 cursor-pointer bg-[#48c480] rounded-full text-white'>

                        <FontAwesomeIcon icon={faEye} />

                    </div>

                    <div className='lg:hidden bg-[#a7a7a7] w-[50%] h-full flex items-center justify-center'>

                        <div onClick={_ => setOpen(true)} className='w-[30px] h-[30px] flex items-center justify-center cursor-pointer text-white'>

                            <FontAwesomeIcon icon={faEye} />

                        </div>

                    </div>

                </div>

                <div className={`fixed w-[95%] sm:w-[70%] lg:w-[50%] h-[90%] sm:h-[60%] shadow-lg top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#a7a7a7] z-[999] transition flex items-center justify-center ${open ? "opacity-100 visible scale-100" : "scale-0 invisible opacity-0"}`}>

                    <PDFViewr classNames={'h-[88%] sm:h-[90%] w-[90%]'} defaultPdf={pdf} />

                    <div onClick={_ => setOpen(false)} className='w-[30px] h-[30px] flex items-center justify-center absolute top-2 right-2 text-[20px] cursor-pointer rounded-full text-white'>

                        <FontAwesomeIcon icon={faClose} />

                    </div>

                </div>

                <div className='col-span-12 lg:col-span-7 xl:col-span-9 mb-10 lg:mb-0 -order-1 lg:order-[initial]'>

                    <h1 className='text-[30px] text-[#151616] mb-5'>{item.asignatura || "Asignatura"}</h1>

                    <div className='flex items-center mb-3'>

                        <p className='bg-[#48c480] p-2 px-5 text-[13px] sm:text-[20px] text-center font-bold rounded-[5px] text-white'>{item.abreviaturaUniversidad}</p>
                        <p className='bg-[#004554] p-2 px-5 text-[13px] sm:text-[20px] text-center font-bold ms-5 rounded-[5px] text-white'>{item.curso}</p>

                    </div>

                    <text className='mb-3'>{item.grado}</text>

                    <p>

                        <span className='text-[#a3a3a3]'>Profesor:</span>
                        <text> {item.profesor}</text>

                    </p>

                    <p>

                        <span className='text-[#a3a3a3]'>Editor:</span>
                        <text> {item.editor}</text>

                    </p>

                    <p>

                        <span className='text-[#a3a3a3]'>Nota:</span>
                        <text> {item.nota}</text>

                    </p>

                    <p>

                        <span className='text-[#a3a3a3]'>N<sup>o</sup> pags:</span>

                        <text>{item?.paginas}</text>

                    </p>

                    <p className='mb-5 hidden lg:block'>

                        <span className='text-[#a3a3a3]'>precio: </span>
                        <text> {isBnPrice ? item?.precioBN?.toFixed(2) : item?.precioCO?.toFixed(2)} €</text>

                    </p>

                    <div className='flex items-center flex-wrap'>

                        <button onClick={_ => setIsBnPrice(true)} className={` text-black border-2 rounded-[5px] transition px-3 sm:px-8 py-2 sm:py-4 text-center w-[46%] mb-5 sm:mb-0 sm:w-fit text-[13px] sm:text-[16px] me-3 ${isBnPrice ? "bg-[#eaeaea]" : ""}`}>BN</button>

                        <button onClick={_ => setIsBnPrice(false)} className={`${isBnPrice ? "" : "bg-[#eaeaea]"} transition text-black border-2 rounded-[5px] w-[46%] mb-5 sm:mb-0 sm:w-fit text-[13px] sm:text-[16px] px-3 sm:px-8 py-2 sm:py-4 me-3 text-center`}>Color</button>

                        <div className='relative'>

                            <h1 className='text-[35px] lg:absolute  lg:-top-14 my-1 text-center w-full'>PVP: {isBnPrice ? item?.precioBN : item?.precioCO} €</h1>

                            <Button onClick={_ => addToCart(item, dispatch)} className='!bg-[#ffc559] w-full sm:w-fit !text-[#013945] text-[13px] sm:!text-[20px] !p-2 !px-5 sm:!px-6 !font-bold' style={{ textTransform: "initial" }}>Anadir al carrito</Button>

                        </div>
                    </div>


                </div>

                <div className='col-span-12'>

                    <RelatedProducts />

                </div>

            </div>

        </div>
    )

}
