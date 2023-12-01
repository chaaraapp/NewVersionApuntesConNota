import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Popup({ showPopup, setShowPopup }) {

    return (
        <div className={`w-full h-full fixed bg-[#262626e0] left-0 top-0 flex items-center justify-center z-[9999] transition ${showPopup ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

            <div className='relative flex items-center justify-center flex-col'>

                <img src={require('../../assetes/images/ACNOTA popup web acn.png')} />

                <div onClick={_ => setShowPopup(false)} className='w-[30px] h-[30px] rounded-full bg-white absolute -right-4 -top-4 flex items-center justify-center cursor-pointer'>

                    <FontAwesomeIcon icon={faClose} className='text-[15px] text-[#48c480]' />

                </div>

                <a onClick={_ => setShowPopup(false)} href={'/formulario-venta'}>

                    <Button className='!mt-5 !w-[200px] !text-center !bg-[#ffc559] !font-bold !text-black !p-3' variant="contained">Aceptar</Button>

                </a>

            </div>

        </div>

    )
}
