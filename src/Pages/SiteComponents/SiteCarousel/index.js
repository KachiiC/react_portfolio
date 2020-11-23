import React from 'react'
// Components
import DisplayCarousel from './DisplayCarousel'

const SiteCarousel = () => {

    return (
        <div className="component-item">
            <h1>React Carousel</h1>
            <p>A simple image carousel built with React and "Pixabay" api. Simply search a word 
                and use the toggle buttons to see the different results of your search!
            </p>
            <DisplayCarousel />
            <h4>So how does it work?</h4>
            <p>"Pixabay"is an API which returns images based on your query. When the search
                input is submited, state saves the searched word as "query". Each time the query
                changes, the useEffect is activated and a fetch request is made. Each request
                will be different as the "query" changes, string interpolation will pull new results
                from the Pixabay and API results are stored as an array of strings. The carousel
                will display 3 results at a time (starting at index 0). In order to avoid any errors,
                a condition ternary is used if the index falls outside of the length of the array.
            </p>
        </div>
    )
}

export default SiteCarousel