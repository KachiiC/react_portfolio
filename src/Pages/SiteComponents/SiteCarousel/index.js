import React from 'react'
// Components
import DisplayCarousel from './DisplayCarousel'

const SiteCarousel = () => {

    return (
        <div className="component-item">
        <h1>React Carousel</h1>
        <p>A simple image carousel built with React. Simply search a word to get start!</p>
        <DisplayCarousel />
        <h4>So how does it work?</h4>
        <p>The pictures are from an API</p>
        </div>
    )
}

export default SiteCarousel