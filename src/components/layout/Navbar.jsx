import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseScroll from '../../hooks/useScroll';


const Navbar = ({ url, showHamburgerMenu }) => {
    //It tracks the scroll position
    const { scrollPosition } = UseScroll()
    const navbarStyle = {
        background: ((url !== '' || scrollPosition >= 200)) ? 'white' : '#655DBB',
        borderBottom: ((url !== '' || scrollPosition >= 200)) ? '1px solid #ccc' : 'none'
    }

    const logoName = {
        color: ((url !== '' || scrollPosition >= 200)) ? '#3e54ac' : '#ecf2ff'
    }

    const navLinks = {
        color: ((url !== '' || scrollPosition >= 200)) ? '#655DBB' : '#fff'
    }

    const signIn = {
        backgroundColor: ((url !== '' || scrollPosition >= 200)) ? '#fff' : '#655DBB',
        color: ((url !== '' || scrollPosition >= 200)) ? '#3e54ac' : '#fff'
    }

    const signUp = {
        background : ((url !== '' || scrollPosition >= 200)) ? 'linear-gradient(123.92deg, rgba(255, 255, 255, 0.6) -2.72%, #655DBB 37.48%);' : '#fff',
        color: ((url !== '' || scrollPosition >= 200)) ? '#fff' : '#3e54ac'
    }
    return (
        <nav className='navbar' style={navbarStyle}>
            <h1 className='logo'>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3.5" y="4" width="35" height="35" fill="white" stroke="#3E54AC" strokeWidth="7" />
                </svg>

                <Link to={'/'} style={logoName} >Slick</Link>
            </h1>
            <ul className='navbar-links-container'>
                <li>
                    <Link className="navbar-link" to={'/pricing'} style={navLinks}>Pricing</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/contact'} style={navLinks}>Contact</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/about'} style={navLinks}>About</Link>
                </li>
            </ul>
            <div className="auth-buttons">
                <Link to={'/auth/login'} className='sign-in-btn' style={signIn}>Login</Link>
                <Link to={'/auth/signup'} className={(scrollPosition >= 200 || url !== '') ? 'sign-up-btn scrolled' : 'sign-up-btn'}>Sign Up</Link>
                <button className='navbar-hamburger-btn' onClick={showHamburgerMenu}>
                    <div className="navbar-hamburger-wrapper">
                        <div className="navbar-hamburger-line half-line"></div>
                        <div className="navbar-hamburger-line"></div>
                        <div className="navbar-hamburger-line half-line"></div>
                    </div>
                </button>
            </div>


        </nav>
    );
}

export default Navbar;
