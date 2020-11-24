import React from 'react'
// Components
import DisplayCarousel from './DisplayCarousel'
// CSS
import ComponentContainer from 'Components/ComponentContainer'

const SiteCarousel = () => (
    
        <ComponentContainer
            title="React Carousel"
            component={<DisplayCarousel />}
            introduction="A simple image carousel built with React and 'Pixabay' 
            api. Simply search a word and use the toggle buttons to see the different 
            results of your search!"
        >
            "Pixabay"is an API which returns images based on your query. When the search
            input is submited, state saves the searched word as "query". Each time the query
            changes, the useEffect is activated and a fetch request is made. Each request
            will be different as the "query" changes, string interpolation will pull new results
            from the Pixabay and API results are stored as an array of strings. The carousel
            will display 3 results at a time (starting at index 0). In order to avoid any errors,
            a condition ternary is used if the index falls outside of the length of the array.

        </ComponentContainer>
)


export default SiteCarousel