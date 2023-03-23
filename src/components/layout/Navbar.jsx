import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ url }) => {
    console.log(url)
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
            <button className='navbar-hamburger-btn'>
                <div class="navbar-hamburger-wrapper">
                    <div class="navbar-hamburger-line half-line"></div>
                    <div class="navbar-hamburger-line"></div>
                    <div class="navbar-hamburger-line half-line"></div>
                </div>
            </button>
        </nav>
    );
}

export default Navbar;
