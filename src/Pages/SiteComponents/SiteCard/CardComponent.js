import React from 'react'
// CSS
import './CardComponent.css'

const CardComponent = (props) => {

    return (
        <div className="card-component-container">
            <img className="card-component-image"
                src={`http://via.placeholder.com/356x200.png?text=${props.image_text}`}
                alt="Avatar" 
            />
            <div className="card-description-container">
                <h4><b>{props.title}</b></h4> 
                <p>{props.description}</p> 
            </div>
        </div>
    )
}

export default CardComponent