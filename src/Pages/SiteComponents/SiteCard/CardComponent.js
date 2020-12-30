import React from 'react'

const CardComponent = (props) => (
    
    <div className="card-component-container">
        <div className="card-component">
            <img className="card-component-image"
                src={props.image}
                alt="Avatar" 
            />
            <div className="card-description-container">
                <h4>{props.title}</h4> 
                <p>{props.description}</p>
            </div>
        </div>
    </div>
)

export default CardComponent