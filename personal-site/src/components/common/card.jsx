import React from "react"

export default function Card(props) {
    return (
        < div className="card" >
            <img className="card-img" alt="mockup" src={props.img}></img>
            <div className="content">
                <div className="title"> {props.name}</div>
                <div className="subtext">{props.description}</div>


            </div>
        </div >
    );
}