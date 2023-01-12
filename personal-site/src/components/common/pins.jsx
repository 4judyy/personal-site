import React from "react";

export default function Pin(props) {
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size]
        }}>


        </div>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red',
    },

    small: {
        gridRowEnd: 'span 20'
    },

    medium: {
        gridRowEnd: 'span 30'
    },

    big: {
        gridRowEnd: 'span 40'
    }
}