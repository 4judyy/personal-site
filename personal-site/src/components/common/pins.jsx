import React from "react";

export default function Pin(props) {
    return (
        <div style={{
            ...styles.pin,
            ...styles[props.size]
        }}>
            <img className="pinImg" style={{
                ...styles.pin,
                ...styles[props.size]
            }} src={props.img}></img>

        </div >
    )
}

const styles = {
    pin: {
        borderRadius: '20px',
        width: "95%",
        height: "95%",
        display: "flex",
        objectFit: 'cover',
    },

    small: {
        // margin: "10px",
        gridRowEnd: 'span 20'
    },

    medium: {
        // margin: "10px",
        gridRowEnd: 'span 30'
    },

    big: {
        // margin: "10px",
        gridRowEnd: 'span 40'
    }
}