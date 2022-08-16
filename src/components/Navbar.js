import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    
    const navStyle = {
        color: 'white'
    }

    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                <li>Home</li>
                </Link>
                <Link style={navStyle} to="/contactus">
                <li>Contact Me</li>
                </Link>
            </ul>
        </nav>
    ); 
}

export default Navbar;