import React from 'react';
import './styling/nav.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className='nav'>
                <div className="icon-container">
                    <a href='https://judyzhou.me/'>
                        <img alt="favicon" src="favicon.png" className="favi"></img>
                    </a>
                </div>
                <div className='nav-right'>

                    <ul className='nav-items'>
                        <li>
                            <Link to="/abt" style={{ textDecoration: 'none' }}>About</Link>
                        </li>

                        <li>
                            <a href="#projects" style={{ textDecoration: 'none' }}>Projects</a>
                        </li>

                        <li>
                            <Link to='Judy_Zhou_Resume.pdf' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}> Resume </Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </header >

    )
}

export default Header;