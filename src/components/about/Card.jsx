import React from "react";
import './Card.css'
import Rafael from './Rafael.jpg'

const Card = () => {

    return (
        <div className="Card">
            <img src={Rafael} alt='Rafael' />
            <span className="header">Rafael</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum temporibus ipsa quas, fugit natus quo impedit tempora illo itaque ipsum.</p>
        </div>
    )
}

export default Card