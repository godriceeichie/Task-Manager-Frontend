import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../container/HamburgerMenu';


const Navbar = ({ url }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const showHamburgerMenu = () => {
        setToggleMenu(!toggleMenu)
        // console.log(toggleMenu);
    }

    // useEffect(() => {
    //    setToggleMenu(false)
    // },[toggleMenu]);
    
    return (
        <nav className='navbar' style={{background: (url !== '') ? 'white' : 'linear-gradient(90deg, rgba(31,70,127,1) 0%, rgba(30,70,129,1) 33%, rgba(31,72,128,1) 67%)'}}>
            <h1 className='logo'>
                <Link to={'/'}>Slick</Link>
            </h1>
            <ul className='navbar-links-container'>
                <li>
                    <Link className="navbar-link" to={'/pricing'}>Pricing</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/about'}>About</Link>
                </li>
            </ul>
            <div className="auth-buttons">
                <Link to={'/login'} className='sign-in-btn'>Login</Link>
                <Link to={'/signup'} className='sign-up-btn'>Get Started</Link>
                
            </div>
            <button className='navbar-hamburger-btn' onClick={showHamburgerMenu}>
                <div className="navbar-hamburger-wrapper">
                    <div className="navbar-hamburger-line half-line"></div>
                    <div className="navbar-hamburger-line"></div>
                    <div className="navbar-hamburger-line half-line"></div>
                </div>
            </button>
            <HamburgerMenu showHamburgerMenu={toggleMenu}/>
        </nav>
    );
}

export default Navbar;
