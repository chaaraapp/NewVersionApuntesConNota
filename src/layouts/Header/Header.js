import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../assetes/utils/utils';
import { useSelector } from 'react-redux';



export default function Header() {

    const [showMnue, setShowMnue] = useState(false);

    const isLoged = localStorage.getItem('token');

    const productCount = useSelector(store => store.cart).length;

    useEffect(() => {

        window.addEventListener('click', _ => setShowMnue(false));

    }, []);

    return (
        <header onClick={e => e.stopPropagation()} className='p-2 px-5 sm:px-32 flex items-center justify-between relative'>

            <FontAwesomeIcon onClick={_ => setShowMnue(!showMnue)} icon={faBars} ></FontAwesomeIcon>

            <Link to={'/'}>

                <img src={require('../../assetes/images/logo.png')} alt="" className="logo w-[100px] sm:w-fit" />

            </Link>

            <div className="flex items-center relative">

                <div className="w-[30px] h-[30px] text-[15px] grid place-content-center absolute right-[-20px] top-[-15px] text-white bg-[#fba023] rounded-full">{productCount}</div>

                <a href={'/information?id=1'}>

                    <FontAwesomeIcon icon={faUser} className='me-5 text-[17px] sm:text-[30px]'></FontAwesomeIcon>

                </a>

                <Link to={'/cart'}>

                    <FontAwesomeIcon icon={faCartShopping} className='text-[17px] !text-[#736988] sm:text-[30px]'></FontAwesomeIcon>

                </Link>

            </div>
            {
                showMnue
                    ?
                    <div className='mnue bg-[#004554] w-[250px] absolute left-10 sm:left-[150px] top-12 sm:top-[60px] transition-all z-[1000]'>

                        <ul className='options-menu'>

                            {!isLoged ? (

                                <Fragment>

                                    <Link to={'/login'}>

                                        <li> <label className='menu-item'>Iniciar Sesion</label>   </li>

                                    </Link>


                                </Fragment>


                            ) : (

                                <Fragment>

                                    <li>  <a href={'/information?id=1'}>  Mi cuenta  </a>   </li>

                                    <li>  <a href={'/formulario-venta'}> Vender mis apuntes </a>   </li>

                                    <li>  <a href={'/buscar-apuntes'}> Buscar apuntes</a>   </li>

                                    <li>  <a href={'/information?id=3'}> Dirección de envío </a></li>

                                    <li>  <a href={'/information?id=2'}> Mis pedidos  </a> </li>

                                    <li>  <a href={'/information?id=4'} > Mis apuntes subidos   </a>  </li>

                                    <li>  <a href={'/information?id=5'}> Mi saldo   </a>  </li>

                                    <li onClick={logout}>

                                        <label className='menu-item'>  Cerrar sesión  </label>

                                    </li>

                                </Fragment>

                            )}
                        </ul>

                    </div>
                    :
                    null
            }

        </header>
    )
}


