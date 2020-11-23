import React from 'react'
import GalleryComponent from './GalleryComponent'

const SiteGallery = () => {
    return (
        <div className="component-item">
            <h1>React Gallery</h1>
            <p>Lets put it all together! Here is a react gallery using both a carousel
                and a Modal.
            </p>
            <GalleryComponent />
        </div>

    )
}

export default SiteGallery