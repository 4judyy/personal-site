import React from 'react';
import Pin from './common/pins';
import { PHOTOS } from './common/photosdata';

function Pinterest() {
    const pins = PHOTOS.map(photo => {
        return (
            <Pin
                img={photo.img}
                size={photo.size}
            />
        )
    })

    return (
        <div style={styles.container}>
            <div style={styles.pin_container}>
                {pins}
            </div>
        </div >



    );
}

const styles = {

    container: {
        display: 'grid',
    },

    pin_container: {
        margin: 0,
        width: '60vw',
        height: '100 %',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 30%)',
        gridAutoRows: '8px',
        overflow: 'none',
        justifyContent: 'center',
    }


}

export default Pinterest;