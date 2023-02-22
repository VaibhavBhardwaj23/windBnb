import React from "react";
import "./card.css"
 export default function Card(props)
 {
    let badge
    if(props.data.superHost === true)
    {
        badge="SUPER HOST";
    }
    return (
        <div className="card--comp">
        <div className="image--container">
        <img src={`${props.data.photo}`} alt="Preview" />
        </div>
        <div className="information">
        {badge && <div className="card--badge">{badge}</div>}
        <div className="type">
        <p> {props.data.type}</p>
        <p> {props.data.beds} beds</p>
        </div>
        <div className="rate">
        <img src="./images/star.png" alt="star"></img>
        <p >{props.data.rating}</p>
        </div>
        </div>
        <h3>{props.data.title}</h3>
        </div>
    );
 }