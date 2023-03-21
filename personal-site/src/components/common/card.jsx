import React from "react"

export default function Card(props) {

    const handleCardClick = () => {
        window.location.href = props.link;
    };


    return (
        < div className="card" onClick={handleCardClick}>
            <img className="card-img" alt="mockup" src={props.img}></img>
            {/* <div className="content">
                <div className="card-title"> {props.name}</div>
                <div className="subtext"> Role: {props.role}</div>


            </div> */}
        </div >
    );
}