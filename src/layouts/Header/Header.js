import { faBars, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logout } from '../../assetes/utils/utils';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const isLoged = localStorage.getItem('token');
    const navigate = useNavigate();

    function handleBurger() {
        setShowMenu(!showMenu);
    }

    function handleLink(event, link = "/information") {
        if (link!==null) {
            navigate(link);
        }
    }

    return (
        <header onClick={e => e.stopPropagation()} className='p-2 px-5 sm:px-32 flex items-center justify-between relative'>
            <FontAwesomeIcon onClick={handleBurger} icon={faBars} ></FontAwesomeIcon>

            <Drawer
                anchor="left"
                open={showMenu}
                onClose={handleBurger}
            >
                <Box sx={{width: 300}} onClick={handleBurger}>
                    {!isLoged? (
                        <List>
                            <ListItem>
                                <ListItemButton onClick={(e) => handleLink(e, "/login")}>
                                    <ListItemText primary="Iniciar Sesión"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ) : (
                        <List>
                            <ListItem>
                                <ListItemButton onClick={(e) => {handleLink(e);sessionStorage.setItem("step", 1)}}>
                                    <ListItemText primary="Mi cuenta"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={(e) => {handleLink(e);sessionStorage.setItem("step", 3)}}>
                                    <ListItemText primary="Datos de facturación"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={(e) => {handleLink(e);sessionStorage.setItem("step", 2)}}>
                                    <ListItemText primary="Datos de envío"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={(e) => {handleLink(e);sessionStorage.setItem("step", 4)}}>
                                    <ListItemText primary="Mis pedidos"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={(e) => {handleLink(e);sessionStorage.setItem("step", 1)}}>
                                    <ListItemText primary="Librería editor"/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={logout}>
                                    <ListItemText primary="Cerrar sesión"/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )}
                </Box>
            </Drawer>

            <Link to={'/'}>
                <img src={require('../../assetes/images/logo.png')} alt="" className="logo w-[100px] sm:w-fit" />
            </Link>

            <div className="header-icons flex items-center relative">
                <a onClick={() => sessionStorage.setItem("step", 1)} href={'/information'}>
                    <FontAwesomeIcon icon={faUser} className='me-5 text-[17px] sm:text-[30px]'></FontAwesomeIcon>
                </a>

                <FontAwesomeIcon icon={faCartShopping} className='text-[17px] !text-[#736988] sm:text-[30px]'></FontAwesomeIcon>
            </div>
        </header>
    )
}


