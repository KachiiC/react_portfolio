import React from 'react'
import ComponentContainer from '../../../Components/ComponentContainer'
// Component
import DisplayGallery from './DisplayGallery'

const SiteGallery = () => (

        <ComponentContainer
            title="React Gallery"
            component={<DisplayGallery />}
            introduction="Lets put it all together! Here is a react gallery using both 
            a carousel and a Modal. Click on the carousel to select and image and then 
            click on the large image to show full screen."
        >
            A gallery put together with using the previous 2 components are a base.

        </ComponentContainer>

)

export default SiteGallery