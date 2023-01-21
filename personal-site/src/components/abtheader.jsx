
import React from 'react';
import './styling/nav.css'
import { Link } from "react-router-dom";

function AbtHeader() {
    return (

        <header>
            <nav className='abt-nav'>
                <div className="icon-container">
                    <img className='abt-favi' alt="favicon" src="favicon.png"></img>
                </div>
                <div className='nav-right'>

                    <ul className='nav-items'>
                        <li>
                            <Link to="/abt" style={{ textDecoration: 'none' }}>About</Link>
                        </li>

                        <li>
                            <a href="/#projects" style={{ textDecoration: 'none' }}>Projects</a>
                        </li>

                        <li>
                            <a href='Judy_Zhou_CV.pdf' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}> Resume </a>
                        </li>
                    </ul>
                </div>
            </nav >
        </header >
    )
}

export default AbtHeader;