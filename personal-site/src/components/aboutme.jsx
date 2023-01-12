import React, { Component } from 'react';
import AbtHeader from './abtheader';
import Pinterest from './pinterest';
import './styling/about.css'


class About extends Component {
    state = {}
    render() {
        return (
            <div>
                < AbtHeader />
                <div className='about-section'>
                    <div>
                        <div className='bffr'>
                            About me!
                        </div>
                        <div className='container1'>
                            <div className='pins'>
                                <Pinterest />
                            </div>

                            <div className='c2'>

                                <div className='about-text'>
                                    <div className='text1'>👋 Hi! I'm Judy and I'm a first-year CS student at Western University.</div>

                                    <div className='text1'>As a creative, I value expression and artistry. Coding manifests itself as a <span className='highlight'>medium of art</span>, providing a canvas to express my artistic side through creating innovative projects.</div>

                                    <div className='text1'>When not busy with work, you'll probably catch me picking up a new book to read, creating new Spotify playlists, playing around with Notion, and going out with friends. Feel free to reach out anytime, I'd love to chat! 😄</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;