import React, { Component } from 'react';


class Landing extends Component {
    state = {
        keywords: ["my logic", "my creativity", "my love", "myself"]
    }
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

                <div className='description'>
                    {/* <p>To me, coding expresses {this.state.keywords}</p> */}
                </div>
                <div className='circles'>
                    <div className='circle1'></div>
                    <div className='circle3'></div>
                    <div className='circle2'></div>
                </div>
            </div>
        );
    }
}

export default Landing;