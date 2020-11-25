import React from 'react'
// CSS
import './CardComponent.css'
// Component
import DisplayCard from './DisplayCard'
import ComponentContainer from 'Components/ComponentContainer'

const SiteCard = () => {

    return (
            <ComponentContainer
                title="React Cards"
                introduction="A simple card component built with react"
                component={<DisplayCard />}
            >    
            React card descriptions
            </ComponentContainer>
    )

}

export default SiteCard