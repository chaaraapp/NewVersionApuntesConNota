import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../assetes/utils/utils';


export default function Header() {

    const [showMnue, setShowMnue] = useState(false);
    const isLoged = localStorage.getItem('token');

    useEffect(() => {

        window.addEventListener('click', _ => setShowMnue(false));

    }, []);

    return (
        <header onClick={e => e.stopPropagation()} className='p-2 px-5 sm:px-32 flex items-center justify-between relative'>

            <FontAwesomeIcon onClick={_ => setShowMnue(!showMnue)} icon={faBars} ></FontAwesomeIcon>

            <Link to={'/'}>

                <img src={require('../../assetes/images/logo.png')} alt="" className="logo w-[100px] sm:w-fit" />

            </Link>

            <div className="header-icons flex items-center relative">

                <a onClick={() => sessionStorage.setItem("step", 1)} href={'/information'}>
                    <FontAwesomeIcon icon={faUser} className='me-5 text-[17px] sm:text-[30px]'></FontAwesomeIcon>
                </a>

                <FontAwesomeIcon icon={faCartShopping} className='text-[17px] !text-[#736988] sm:text-[30px]'></FontAwesomeIcon>

            </div>
            {
                showMnue
                    ?
                    <div className='mnue bg-[#004554] w-[250px] absolute left-[150px] top-[60px] transition-all z-[1000]'>

                        <ul className='options-menu'>

                            <li>

                                <a href={"/information"} className='menu-item' onClick={() => sessionStorage.setItem("step", 1)}  >
                                    Mi cuenta
                                </a>

                            </li>
                            <li>

                                <a href={"/information"} className='menu-item' onClick={() => sessionStorage.setItem("step", 3)}  >
                                    Datos de facturación
                                </a>

                            </li>
                            <li>

                                <a href={"/information"} className='menu-item' onClick={() => sessionStorage.setItem("step", 3)}         >
                                    Datos de envío
                                </a>

                            </li>
                            <li>

                                <a href={"/information"} className='menu-item' onClick={() => sessionStorage.setItem("step", 2)} >
                                    Mis pedidos
                                </a>

                            </li>
                            <li>

                                <a href={"/information"} className='menu-item' onClick={() => sessionStorage.setItem("step", 4)} >
                                    Librería editor
                                </a>

                            </li>


                            {!isLoged ? (
                                <Link to={'/login'}>
                                    <li>
                                        <label className='menu-item'>Iniciar Sesion</label>
                                    </li>
                                </Link>
                            ) : (
                                <li onClick={logout}>
                                    <label className='menu-item'>
                                        Cerrar sesión
                                    </label>
                                </li>
                            )}
                        </ul>

                    </div>
                    :
                    null
            }

        </header>
    )
}


