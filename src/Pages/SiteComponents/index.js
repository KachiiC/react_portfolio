import React from 'react'
// CSS
import './sitecomponents.css'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'

const SiteComponents = () => {

    const allComponents = [
        <SiteModal/>, 
        <SiteCarousel />
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