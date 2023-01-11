import React from 'react';
import './styling/nav.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li>
                        <Link to="/abt" style={{ textDecoration: 'none' }}>About</Link>
                    </li>

                    <li>
                        <a href="#projects" style={{ textDecoration: 'none' }}>Projects</a>
                    </li>

                    <li>
                        <Link to='Judy_Zhou_CV.pdf' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}> Resume </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;