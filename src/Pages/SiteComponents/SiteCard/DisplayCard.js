import React from 'react'
// Component
import CardComponent from './CardComponent'
// CSS
import './CardComponent.css'

const DisplayCard = () => {

    return (
        <div className="display-card-container">
            <CardComponent 
                image_text="Card 2"
                title="card 1"
                description="This is the second"
            />
            <CardComponent 
                image_text="Card 1"
                title="card 1"
                description="description 1"
            />
        </div>
    )
    
}

export default DisplayCard