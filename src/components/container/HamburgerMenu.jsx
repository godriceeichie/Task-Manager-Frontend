import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ showHamburgerMenu, closeHamburgerMenu }) => {
    const display = showHamburgerMenu ? 'show' : ''
    const navbarClass = useRef(' ')
    console.log(showHamburgerMenu, navbarClass.current.className);
    return (
        <nav className={`hamburger-menu ${display}`} ref={navbarClass}>
            <div className="hamburger-menu-container">
                {/* <CloseButton /> */}
                <header>
                    <h1 className='logo'>
                        <Link to={'/'}>Slick</Link>
                    </h1>
                    <button onClick={closeHamburgerMenu} className="hamburger-close-btn"></button>
                </header>
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
            </div>
        </nav>
    );
}

export default HamburgerMenu;
