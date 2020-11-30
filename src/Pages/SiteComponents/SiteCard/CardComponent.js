import React from 'react'

const CardComponent = (props) => (
    
    <div className="card-component-container">
        <img className="card-component-image"
            src={props.image}
            alt="Avatar" 
        />
        <div className="card-description-container">
            <h4>{props.title}</h4> 
            <div className="card-description-content">{props.description}</div>
        </div>
    </div>
)

export default CardComponent