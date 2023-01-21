import React from "react"

export default function Card(props) {
    return (
        < div className="card" >
            <img className="card-img" alt="mockup" src={props.img}></img>
            {/* <div className="content">
                <div className="card-title"> {props.name}</div>
                <div className="subtext"> Role: {props.role}</div>


            </div> */}
        </div >
    );
}