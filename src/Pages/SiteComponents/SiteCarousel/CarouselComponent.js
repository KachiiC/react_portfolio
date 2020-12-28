import React,{useState} from 'react'
// Components
import Icon from 'react-fa'

const CarouselComponent = ({ images }) => {

    const [index, setIndex] = useState(0); 
  
    const slideLeft = () => {
      index === 0 ? setIndex(images.length - 3): setIndex(index - 1);
    };

    const slideRight = () => {
      index === images.length -3 ? setIndex(0) :setIndex(index + 1);
    };

    const imageNumber = [0,1,2]


    const displayImages = imageNumber.map ((imageNumber) => {

        const displayIndex = index + imageNumber

        return (
            <div className="slide-image-container">
                <img src={images[displayIndex]} 
                    alt={index}
                    key={displayIndex}
                    className="slide-image"
                    />
            </div>
        )  
    })
  
    return (
        images.length > 0 && (
            <div className="carousel-images-container">
                <Icon size="2x" name="angle-double-left" 
                    onClick={slideLeft} className="toggle-button"
                />
                {displayImages}
                <Icon size="2x" name="angle-double-right" 
                    onClick={slideRight} className="toggle-button"
                />
            </div>
        )
    )
};


export default CarouselComponent