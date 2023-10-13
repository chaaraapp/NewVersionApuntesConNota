import React from 'react'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCreditCard, faFileImport, faMapMarkerAlt, faPowerOff, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../../../assetes/utils/utils';


export default function Panel({ steper, setSteper }) {

    return (
        <aside className='col-span-12 lg:col-span-3'>

            <div className='py-3' style={{ borderRadius: "5px" }}>

                <div onClick={() => setSteper(1)} className={`flex items-center rounded-t-[4px] transition-all border border-[#eee] hover:!bg-[#84D9ED] hover:!border-[#84D9ED] border-t-transparent cursor-pointer ${steper === 1 ? "!bg-[#cdfecc] !border-[#e7f1ff] !text-black" : ""} d-flex align-items-center py-2 px-2`}  >

                    <FontAwesomeIcon icon={faAddressCard} />

                    <p className='ml-2 mb-0'>Información personal</p>

                </div>

                <div onClick={() => setSteper(2)} className={`flex items-center transition-all border border-[#eee] hover:!bg-[#84D9ED] hover:!border-[#84D9ED] border-t-transparent  cursor-pointer ${steper === 2 ? "!bg-[#cdfecc] !border-[#e7f1ff] !text-black" : ""} d-flex align-items-center py-2 px-2`} >

                    <FontAwesomeIcon icon={faShoppingBasket} />

                    <p className='ml-2 mb-0'>Mis pedidos</p>

                </div>

                <div onClick={() => setSteper(3)} className={`flex items-center transition-all border border-[#eee] hover:!bg-[#84D9ED] hover:!border-[#84D9ED] border-t-transparent  cursor-pointer mnue-item ${steper === 3 ? "!bg-[#cdfecc] !border-[#e7f1ff] !text-black" : ""} d-flex align-items-center py-2 px-2`}      >

                    <FontAwesomeIcon icon={faMapMarkerAlt} />

                    <p className='ml-2 mb-0'>Dirección de envío</p>

                </div>

                <div
                    onClick={() => setSteper(4)} className={`flex items-center transition-all border border-[#eee] hover:!bg-[#84D9ED] hover:!border-[#84D9ED] border-t-transparent  cursor-pointer ${steper === 4 ? "!bg-[#cdfecc] !border-[#e7f1ff] !text-black" : ""} d-flex align-items-center py-2 px-2`}    >

                    <FontAwesomeIcon icon={faFileImport} />

                    <p className='ml-2 mb-0'>Librería de editor</p>

                </div>

                <div
                    onClick={() => setSteper(5)} className={`flex items-center transition-all border border-[#eee] hover:!bg-[#84D9ED] hover:!border-[#84D9ED] border-t-transparent  ${steper === 5 ? "!bg-[#cdfecc] !border-[#e7f1ff] !text-black" : ""} cursor-pointer d-flex align-items-center py-2 px-2`}  >

                    <FontAwesomeIcon icon={faCreditCard} />

                    <p className='ml-2 mb-0'>Saldo a favor</p>

                </div>


                <Button onClick={logout} variant="contained" style={{ textTransform: "initial" }} className='!bg-[#ff2748] !text-[15px] !font-bold !mt-3'>

                    <FontAwesomeIcon icon={faPowerOff} className='me-2 text-[18px]' />
                    Cerrar sesión

                </Button>

            </div>

        </aside>
    )
}
