import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ url, showHamburgerMenu }) => {
    const navbarStyle = {
        background: (url !== '') ? 'white' : '#655DBB',
        boxShadow: (url !== '') ? '0px 2px 25px -3px rgba(0,0,0,0.31)' : 'none'
    }

    return (
        <nav className='navbar' style={navbarStyle}>
            <h1 className='logo'>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3.5" y="4" width="35" height="35" fill="white" stroke="#3E54AC" strokeWidth="7" />
                </svg>

                <Link to={'/'}>Slick</Link>
            </h1>
            <ul className='navbar-links-container'>
                <li>
                    <Link className="navbar-link" to={'/pricing'} >Pricing</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/contact'} >Contact</Link>
                </li>
                <li>
                    <Link className="navbar-link" to={'/about'} >About</Link>
                </li>
            </ul>
            <div className="auth-buttons">
                <Link to={'/auth/login'} className='sign-in-btn'>Login</Link>
                <Link to={'/auth/signup'} className='sign-up-btn'>Sign Up</Link>
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
