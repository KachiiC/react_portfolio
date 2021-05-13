import React from 'react'
//CSS
import './CardComponent.css'
// COMPONENTS
import CardComponent from './CardComponent'


const SiteCard = (props) => {

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

export default SiteCard