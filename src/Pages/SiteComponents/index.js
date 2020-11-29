import React from 'react'
// CSS
import './SiteComponents.css'
import MainContentContainer from 'Components/MainContentContainer'
// Components
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteCard from './SiteCard'
import SiteModal from './SiteModal'
import SiteCarousel from './SiteCarousel'
import SiteGallery from './SiteGallery'

const SiteComponents = () => {

    const componentsList = [
        <SiteCard id="card"/>, 
        <SiteModal id="modal"/>, 
        <SiteCarousel id="carousel"/>,
        <SiteGallery id="gallery"/>
    ]
    
    return (
        <MainContentContainer
            introduction={<SiteComponentsIntroduction />}
            components={componentsList}
        />
    )
}

export default SiteComponents