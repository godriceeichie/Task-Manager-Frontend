import { Overlay } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HamburgerMenu, Landing, Navbar } from '../components';



const Home = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const showHamburgerMenu = () => {
        setToggleMenu(true)
       
    }

    const closeHamburgerMenu = () => {
        setToggleMenu(false)
    }
    const location = useLocation()
    const path = location.pathname.split('/')[1]
    // console.log(path)
    return (
        <>
            <Navbar url={path} showHamburgerMenu={showHamburgerMenu}/>
            <HamburgerMenu showHamburgerMenu={toggleMenu} closeHamburgerMenu={closeHamburgerMenu}/>
            {toggleMenu && <Overlay color="#000" opacity={0.5   }/>}
            <Outlet />
        </>
    );
}

export default Home;