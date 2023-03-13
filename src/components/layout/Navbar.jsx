import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>Sli<span>ck</span></h1>
            <ul className='navbar-links-container'>
                <li>
                    <Link className="navbar-link">Pricing</Link>
                </li>
                <li>
                    <Link className="navbar-link">Contact</Link>
                </li>
                <li>
                    <Link className="navbar-link">About</Link>
                </li>
            </ul>
            <button className='sign-in-btn'>
                <Link to={'/signup'}>Sign Up</Link>
            </button>
        </nav>
    );
}

export default Navbar;
