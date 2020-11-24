import React from 'react'
// Component
import DisplayCard from './DisplayCard'
import ComponentContainer from 'Components/ComponentContainer'

const SiteCard = () => {

    return (
            <ComponentContainer
                title="React Cards"
                introduction="React Cards intro"
                component={<DisplayCard />}
            >    
                <p>React card descriptions</p>
            </ComponentContainer>
    )

}

export default SiteCard