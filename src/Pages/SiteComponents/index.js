import React from 'react'
import SiteCarousel from './SiteCarousel'
// CSS
import './sitecomponents.css'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteModal from './SiteModal'

const SiteComponents = () => {
    
    return (
        <>
            <SiteComponentsIntroduction />
            <SiteModal />
            <hr className ="component-separator"/>
            <SiteCarousel />
            <hr className="component-separator"/>
        </>

    )
}

export default SiteComponents