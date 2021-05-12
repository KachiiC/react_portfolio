import React from 'react'
// CSS
import './SiteComponents.css'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteCard from './SiteCard'
import SiteTable from './SiteTable'
import SiteTabs from './SiteTabs'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'
import SiteGallery from './SiteGallery'
import ComponentContainer from 'Components/ComponentContainer'

const SiteComponents = () => {

    const componentsList = [
        SiteCard,
        SiteTable,
        SiteTabs,
        SiteModal,
        SiteCarousel,
        SiteGallery
    ]

    const displayedComponents = componentsList.map((component, index) => (
        <ComponentContainer 
            title={component.title}
            description={component.description}
            component={component.component}
            introduction={component.introduction}
            key={index}
        />
    ))
    
    return (
        <div className="site-components-container">
            <h1>Site Components</h1>
            {SiteComponentsIntroduction}
            {displayedComponents}
        </div>
    )
}

export default SiteComponents