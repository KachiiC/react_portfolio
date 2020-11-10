import React from 'react'
import SiteCarousel from './SiteCarousel'
// CSS
import './sitecomponents.css'
// Components
import SiteModal from './SiteModal'

const SiteComponents = () => {
    
    return (
        <div className="page-container">
            <div className="page-paragraph">
                <h1>Site Components</h1>
                <p>The Great thing about react is the the fact you can create components and
                    reuse them whenever you want. Although I do often use libraries such as 
                    react-bootstrap, material-ui and ant design can be used when making quick 
                    projects. I've also taken time to learn how to make my own components just 
                    in case.
                </p>
                <SiteModal />
                <SiteCarousel />
            </div>
        </div>
    )
}

export default SiteComponents