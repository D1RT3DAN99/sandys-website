import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {Button} from './Button'

function Navbar() {
    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

    //Functions that handles the navbar hamburger menu
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //function that displays the button on mobile
    const showButton = () => {          
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    //invokes the previous button
    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        SPTS<i class='fa-solid fa-hands-holding-circle' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contactme' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT ME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT ME
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    ); 
}

export default Navbar;