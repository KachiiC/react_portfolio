import React from 'react'
// Component
import DisplayGallery from './DisplayGallery'

const SiteGallery = () => (
    
        <div className="component-item">
            <h1>React Gallery</h1>
            <p>Lets put it all together! Here is a react gallery using both a carousel
                and a Modal. Click on the carousel to select and image and then click on
                the large image to show full screen.
            </p>
            <DisplayGallery />
        </div>

)

export default SiteGallery