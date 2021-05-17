import React from 'react'
// Component
import SiteOverlay from 'Components/SiteOverlay'
import SiteIcon from 'Components/SiteIcon'

const VideoCarousel = (props) => (
    
    <div className="m-auto w-90">
        <SiteOverlay 
            click={props.click} 
            icon={<SiteIcon icon="play" color="white" />}
        >
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.displayed_image} 
                    alt="current_slide" 
                    className="site-responsive-image site-border-white cursor-pointer"
                    href={props.link}
                /> 
            </a>
        </SiteOverlay>
        <div style={{"gridTemplateColumns": `repeat(${props.row_images},1fr)`}}
            className="site-grid" 
        >
            {props.images}
        </div>
    </div>

)

export default VideoCarousel