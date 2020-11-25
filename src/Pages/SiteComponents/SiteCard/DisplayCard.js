import React from 'react'
// Component
import CardComponent from './CardComponent'
// Data
import CardData from 'Data/SiteComponents/CardData'

const DisplayCard = () => {

    const renderCardList = CardData.map((card) => (
        
        <CardComponent 
            title={card.title}
            description={card.description}
            image={card.image}
        />

    ))

    return (
        <div className="display-card-container">
            {renderCardList}
        </div>
    )
    
}

export default DisplayCard