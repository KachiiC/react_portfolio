import React, { useState } from 'react'
// CSS
import './SiteCarousel.css'
// COMPONENTS
import VideoCarousel from './Components/VideoCarousel'

const SiteVideoCarousel = (props) => {

    const [selectedImage, setSelectedImage] = useState(0)

    // current set image
    const current = props.data[selectedImage]

    // Number of images displayed in thumbnail rows
    const rowImages = props.row_images ? props.row_images : 4

    // Slices the data 
    const displayImagesRow = props.data.slice(0,rowImages).map((image, index) => {
        
        // On click changes image of carousel to clicked image
        const handleChange = () => setSelectedImage(props.data.indexOf(image))

        return (
            <div className="site-span-1 site-border-white cursor-pointer">
                <img className="site-responsive-image site-border-white"
                    key={index}
                    src={image.image} 
                    alt={image.title} 
                    onClick={handleChange}
                />
                <div className="site-overlay-pic"/>
            </div>
        )
    })

    const titleLogic = () => {
        if (props.title) {
            return <h2>{props.title}</h2>
        } 
    }

    return (
        <>
            {/* The Video Carousel */}
            <div className="image-carousel-container">
                {titleLogic()}
                <VideoCarousel
                    displayed_image={current.image}
                    images={displayImagesRow}
                    row_images={rowImages}
                    link={current.link}
                />
            </div>
        </>
    )
}

export default SiteVideoCarousel