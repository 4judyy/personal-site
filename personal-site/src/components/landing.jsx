import React, { Component } from 'react';


class Landing extends Component {
    state = {}
    render() {
        return (
            <div className="body">
                <div className='heading'>
                    <p>Hi! I'm
                        <img src='judy.jpeg' />
                        Judy,</p>
                </div>

                <div className='title'>
                    <p>a first year CS student @ <span className="highlight">University of Western</span> with a passion for front-end development!</p>
                </div>
            </div>
        );
    }
}

export default Landing;