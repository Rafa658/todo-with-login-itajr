import React from "react";
import './Card.css'
import Rafael from './Rafael.jpg'

const Card = () => {

    return (
        <div className="Card">
            <img src={Rafael} alt='Rafael' />
            <span className="header">Rafael</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus veritatis autem beatae a architecto quidem minus aliquam. Earum, quaerat amet, a neque deleniti reiciendis facere vitae non enim, voluptas itaque nostrum magnam cumque labore quasi dignissimos porro ratione hic aliquid nobis exercitationem? Eveniet repellat incidunt omnis nemo explicabo id.</p>
        </div>
    )
}

export default Card