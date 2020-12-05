import React from 'react'
// CSS
import './SiteComponents.css'
import MainContentContainer from 'Components/MainContentContainer'
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

    const displayedComponents = componentsList.map((component) => (
        <ComponentContainer 
            title={component.title}
            description={component.description}
            component={component.component}
            introduction={component.introduction}
        />
    ))
    
    return (
        <MainContentContainer
            introduction={<SiteComponentsIntroduction />}
            components={displayedComponents}
        />
    )
}

export default SiteComponents