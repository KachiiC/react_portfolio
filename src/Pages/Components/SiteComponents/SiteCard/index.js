import React from 'react'
//CSS
import './CardComponent.css'
// COMPONENTS
import CardComponent from './CardComponent'


const SiteCard = (props) => {

    const numberLogic = props.number_of_cards ? props.number_of_cards : 2

    const renderCardList = props.data.map((card, index) => (
        
        <CardComponent 
            title={card.title}
            description={card.description}
            image={card.image}
            key={index}
            link={card.link}
            card_height={card.card_height}
        />

    )).slice(0, numberLogic)

    return (
        <div className="site-grid display-card-container"
            style={{"gridTemplateColumns": `repeat(${numberLogic},1fr)`}}
        >
            {renderCardList}
        </div>
    )
    
}

export default SiteCard