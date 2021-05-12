import React from 'react'
// Component
import CardComponent from './CardComponent'
// Data

const DisplayCard = (props) => {

    const renderCardList = props.data.map((card, index) => (
        
        <CardComponent 
            title={card.title}
            description={card.description}
            image={card.image}
            key={index}
        />

    ))

    return (
        <div className="site-grid-system display-card-container">
            {renderCardList}
        </div>
    )
    
}

export default DisplayCard