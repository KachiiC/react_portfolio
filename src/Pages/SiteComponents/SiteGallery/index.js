import React from 'react'
import ComponentContainer from '../../../Components/ComponentContainer'
// Component
import DisplayGallery from './DisplayGallery'

const SiteGallery = () => (

        <ComponentContainer
            title="React Gallery"
            component={<DisplayGallery />}
            introduction="Lets put it all together! Here is a react gallery using both 
            a carousel and a Modal. Click on the carousel to select an image and then 
            click on the large image to show full screen."
        >
            This properties of both combines the carousel and the modal. The gallery 
            consists of a selected image (which by default is the first image from the query) 
            and a carousel of images that match the query. The image carousel is fairly similar  
            to the previous component, but now when you click on the image, react hooks takes 
            the image’s index and displays the same image as the large selected image. To 
            further view the image, the image can be displayed similar to the modal component 
            when clicked.     
        </ComponentContainer>

)

export default SiteGallery