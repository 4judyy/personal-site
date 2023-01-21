import './styling/landing.css'
import React, { Component } from 'react';
import Projects from './projects';
import Header from './nav';

class Landing extends Component {

    render() {
        return (
            <div >
                <Header />
                <div className="container">
                    <div className='text'>
                        <div className='heading'>
                            <p>Hi! I'm Judy <img alt="Judy Zhou" src='judy.jpeg' width="40px" />,</p>
                        </div>
                        <div className='title'>
                            <p>a first year CS student @ <span className="highlight">University of Western</span> with a passion for front-end development!</p>
                        </div>

                        <div className='description'>
                            <p>To me, coding expresses my logic, my creativity, and myself.</p>
                        </div>
                    </div>
                    <div className='circles'>
                        <div className='circle1'></div>
                        <div className='circle2'></div>
                    </div>
                </div>
                <div id="projects">
                    <Projects />
                </div>
            </div>
        );
    }
}

export default Landing;