import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const HamburgerMenu = ({ showHamburgerMenu }) => {
    const display = showHamburgerMenu ? 'show' : ''
    const navbarClass = useRef(' ')
    console.log(showHamburgerMenu, navbarClass.current.className);
    return (
        <nav className={`hamburger-menu ${display}`} ref={navbarClass}>
            <ul className={`navbar-links-container`} >
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
        </nav>
    );
}

export default HamburgerMenu;
