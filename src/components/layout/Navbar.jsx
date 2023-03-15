import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ url }) => {
    console.log(url)
    
    return (
        <nav className='navbar' style={{backgroundColor: (url !== '') ? 'white' : 'transparent'}}>
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
                <button className='sign-in-btn'>
                    <Link to={'/signin'}>Login</Link>
                </button>
                <button className='sign-up-btn'>
                    <Link to={'/signup'}>Get Started</Link>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
