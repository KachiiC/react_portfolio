import React from 'react'
// CSS
import './SiteComponents.css'
import MainContentContainer from 'Components/MainContentContainer'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteCard from './SiteCard'
import SiteTabs from './SiteTabs'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'
import SiteGallery from './SiteGallery'

const SiteComponents = () => {

    const componentsList = [
        <SiteCard />, 
        <SiteTabs />,
        <SiteModal />, 
        <SiteCarousel />,
        <SiteGallery />
    ]
    
    return (
        <MainContentContainer
            introduction={<SiteComponentsIntroduction />}
            components={componentsList}
        />
    )
}

export default SiteComponents