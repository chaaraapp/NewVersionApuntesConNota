import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {

    return (

        <footer className='p-3 min-h-[300px] bg-[#004554] flex items-center justify-center'>

            <a href='mailto:info@apuntesconnota.es' target='_blank' className='socia-icon-wrapper w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#cdfecc] rounded-full mx-[10px] transition-all hover:text-black'   >

                <FontAwesomeIcon icon={faEnvelope} className="text-[20px] text-[#004554]" />

            </a>

            <a href='https://www.instagram.com/apuntesconnota/' target='_blank' className='socia-icon-wrapper w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#cdfecc] rounded-full mx-[10px] transition-all hover:text-black' >

                <FontAwesomeIcon icon={faInstagram} className="text-[20px] text-[#004554]" />

            </a>

            <a href='https://www.tiktok.com/@apuntesconnota?lang=es' target='_blank' className='socia-icon-wrapper w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#cdfecc] rounded-full mx-[10px] transition-all hover:text-black'>

                <FontAwesomeIcon icon={faTiktok} className="text-[20px] text-[#004554]" />

            </a>

            <a href='https://api.whatsapp.com/send/?phone=%2B34660094622&text&type=phone_number&app_absent=0' target='_blank' className='socia-icon-wrapper w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#cdfecc] rounded-full mx-[10px] transition-all hover:text-black'  >

                <FontAwesomeIcon icon={faWhatsapp} className="text-[20px] text-[#004554]" />

            </a>
        </footer>

    );
}
