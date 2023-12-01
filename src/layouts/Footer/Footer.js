import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../../components";

export default function Footer() {

    return (

        <Fragment>

            <div className='container !my-20'>

                <Accordion />

            </div>

            <footer className='p-3 min-h-[300px] bg-[#004554]'>

                <div className="container grid grid-cols-12 gap-5 lg:gap-10">

                    <ul className="col-span-12 sm:col-span-6 lg:col-span-3">

                        <h1 className="mb-5 font-medium text-white border-b border-white pb-1 text-[20px]">Quiénes somos</h1>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                            <Link to={'/avisolegal'}>Aviso Legal</Link>
                        </li>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                            <Link to={'/privacidad'}>Privacidad</Link>
                        </li>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                            <Link to={'/condicionesgenerales'}>Condiciones generales</Link>
                        </li>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                            <Link to={'/politicacookies'}>Politica de Cookies</Link>
                        </li>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                            <Link to={'/'}>Cambiar preferencias de cookies</Link>
                        </li>

                    </ul>

                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">

                        <ul className="mb-5">

                            <h1 className="mb-5 font-medium text-white border-b border-white pb-1 text-[20px]">Compras</h1>

                            <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                                <Link to={'/formaspago'}>Formas de pago</Link>
                            </li>

                            <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                                <Link to={'/buscar-apuntes'}>Comprar apuntes</Link>
                            </li>

                        </ul>

                        <ul>

                            <h1 className="mb-5 font-medium text-white border-b border-white pb-1 text-[20px]">Ventas</h1>

                            <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-1">
                                <Link to={'/formulario-venta'}>Vender apuntes</Link>
                            </li>


                        </ul>

                    </div>

                    <ul className="col-span-12 sm:col-span-6 lg:col-span-3">

                        <h1 className="mb-5 font-medium text-white border-b border-white pb-1 text-[20px]">Redes sociales</h1>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-3 flex items-center">

                            <a href='https://www.facebook.com/apuntesconnota' target='_blank' className='me-3' >

                                <FontAwesomeIcon icon={faFacebookF} className="text-[20px] me-3" />

                                <span>Facebook</span>

                            </a>

                        </li>
                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-3 flex items-center">

                            <a href='https://www.instagram.com/apuntesconnota/' target='_blank' className='me-3' >

                                <FontAwesomeIcon icon={faInstagram} className="text-[20px] me-3" />

                                <span>Instagram</span>

                            </a>

                        </li>
                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-3 flex items-center">

                            <a href='https://www.tiktok.com/@apuntesconnota?lang=es' target='_blank' className='me-3' >

                                <FontAwesomeIcon icon={faTiktok} className="text-[20px] me-3" />

                                <span>Tiktok</span>

                            </a>

                        </li>

                    </ul>

                    <ul className="col-span-12 sm:col-span-6 lg:col-span-3">

                        <h1 className="mb-5 font-medium text-white border-b border-white pb-1 text-[20px]">Contacto</h1>

                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-3 flex items-center">

                            <a href='mailto: info@apuntesconnota.es' target='_blank' >

                                <FontAwesomeIcon icon={faEnvelope} className="text-[20px] me-3" />

                                <span>info@apuntesconnota.es</span>

                            </a>


                        </li>
                        <li className="text-[#ccc] transition hover:text-[white] hover:underline mb-3 flex items-center">

                            <a href='https://api.whatsapp.com/send/?phone=%2B34660094622&text&type=phone_number&app_absent=0' target='_blank' className='me-3' >

                                <FontAwesomeIcon icon={faWhatsapp} className="text-[20px] me-3" />

                                <span>Whatsapp</span>

                            </a>


                        </li>

                    </ul>

                </div>

            </footer>

        </Fragment>

    );
}

