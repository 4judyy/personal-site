import React from 'react';
import './styling/nav.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li>
                        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                    </li>

                    <li>
                        <Link to="/#" style={{ textDecoration: 'none' }}> My Projects</Link>
                    </li>

                    <li>
                        <a href='Judy_Zhou_CV.pdf' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}> Resume </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;