import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function AuthPopup() {

    const [visible, setVisible] = useState(true);

    return (

        <div className={`absolute left-0 top-0 w-full h-[100vh] flex items-center justify-center z-[1000] transition ${visible ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

            <div className="shadow-lg rounded-[10px] px-[100px] py-[80px] bg-white flex items-center justify-center flex-col relative">

                <FontAwesomeIcon onClick={_ => setVisible(false)} icon={faClose} className='absolute right-5 top-5 text-[30px] cursor-pointer text-[#949595]' />

                <h1 className='text-[#004554] lg:text-[50px] font-medium mb-8'>Registro completado!</h1>

                <h5 className='text-[#004554] lg:text-[35px] leading-9 font-medium text-center mb-8'>Ya puedes empezar a comprar <br /> o vender tus apuntes</h5>

                <h5 className='lg:text-[50px] text-[#48c480] font-medium text-center'>Mucha suerte!</h5>

            </div>

        </div>

    )

}
