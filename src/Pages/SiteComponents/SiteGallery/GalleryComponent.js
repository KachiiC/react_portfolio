import React, {useState} from 'react'
// Component
import Icon from 'react-fa'
import DisplayImage from './DisplayImage';
// Icons

const GalleryComponent = ({images}) => {

    const [imageIndex, setImageIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [fullImage, setFullImage] = useState("")
    const [fullScreen, setFullScreen] = useState(false)
  
    const slideLeft = () => {
        imageIndex === 0 ? setImageIndex(images.length - 3): setImageIndex(imageIndex - 1);
    }

    const slideRight = () => {
        imageIndex === images.length - 3 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
    }
    
    const viewImage = () => {
        setFullImage(images[selectedIndex])
        setFullScreen(true)
    }

    const imageNumber = [0, 1, 2]

    const displayImages = imageNumber.map ((imageNumber, index) => {

        const displayIndex = imageIndex + imageNumber

        return (
            <div className="gallery-slide-container">
                <img src={images[displayIndex]}
                    key={index} 
                    alt={imageIndex} 
                    className="gallery-slide"
                    onClick={() => setSelectedIndex(displayIndex) }
                />
            </div>
        )
    })
  
    return (
        <>
            { fullScreen && (
                <DisplayImage selection={fullImage} 
                    closeImage={() => setFullScreen(false)}
                />
            )}
            <div className="gallery-container">
                <img src={images[selectedIndex]} 
                    alt="selected" 
                    className="current-image"
                    onClick={viewImage}
                />
                <div className="gallery-images-container">
                    <Icon size="2x" 
                        name="angle-double-left" 
                        onClick={slideLeft} 
                        className="gallery-toggle-button"
                    />
                    {displayImages}
                    <Icon size="2x" 
                        name="angle-double-right" 
                        onClick={slideRight} 
                        className="gallery-toggle-button"
                    />
                </div>
            </div>
        </>
    )
    
};
   

export default GalleryComponent