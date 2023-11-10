import './styling/landing.css'
import React, { Component } from 'react';
import Projects from './projects';
import Header from './nav';

const judys = [
    './judys/judy.jpeg',
    './judys/judy2.jpeg',
    './judys/judy3.jpeg',
    './judys/judy4.jpeg',
    './judys/judy5.jpeg',
    './judys/judy6.jpeg'
];

class Landing extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
    }

    nextImage = () => {
        this.setState(state => ({
            currentImageIndex: (state.currentImageIndex + 1) % judys.length
        }));
    }

    componentDidMount() {
        this.intervalId = setInterval(this.nextImage, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div >
                <Header />
                <div className="container">
                    <div className='text'>
                        <div className='heading'>
                            <p>Hi! I'm Judy <img alt="Judy Zhou" src={judys[this.state.currentImageIndex]} width="50px" />,</p>
                        </div>
                        <div className='title'>
                            <p>a second year CS student @ <span className="highlight">University of Western</span> with a passion for full-stack development!</p>
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