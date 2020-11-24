import React from 'react'
// CSS
import './CardComponent.css'

const CardComponent = (props) => {

    return (
        <div className="card-component-container">
            <img className="card-component-image"
                src={props.image}
                alt="Avatar" 
            />
            <div className="card-description-container">
                <h4><b>{props.title}</b></h4> 
                {props.description}
            </div>
        </div>
    )
}

export default CardComponent