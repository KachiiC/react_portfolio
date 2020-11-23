import React from 'react'
// CSS
import './sitecomponents.css'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'
import SiteGallery from './SiteGallery'

const SiteComponents = () => {

    const allComponents = [
        <SiteModal/>, 
        <SiteCarousel />,
        <SiteGallery />
    ]

    const displayComponents = allComponents.map((component) => (
        <>
            <hr className="component-separator"/>
            {component}
        </>
    ))
    
    return (
        <div>
            <SiteComponentsIntroduction />
            {displayComponents}
        </div>

    )
}

export default SiteComponents