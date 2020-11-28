import React from 'react'
// CSS
import './sitecomponents.css'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'
import SiteGallery from './SiteGallery'
import SiteCard from './SiteCard'

const SiteComponents = () => {

    const allComponents = [
        <SiteCard />,
        <SiteModal />, 
        <SiteCarousel />,
        <SiteGallery />
    ]

    const displayComponents = allComponents.map((component, index) => (
        <div key={index}>
            <hr className="component-separator"/>
            {component}
        </div>
    ))
    
    return (
        <div>
            <SiteComponentsIntroduction />
            {displayComponents}
        </div>

    )
}

export default SiteComponents