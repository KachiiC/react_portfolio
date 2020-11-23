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
  
    return (
        images.length > 0 && (
            <div className="carousel-container">
                <Icon size="2x" name="angle-double-left" 
                    onClick={slideLeft} className="toggle-button"
                />
                    <img src={images[index]} alt={index} className="slide-image"/>
                    <img src={images[index+1]} alt={index} className="slide-image" />
                    <img src={images[index+2]} alt={index} className="slide-image"/>
                <Icon size="2x" name="angle-double-right" 
                    onClick={slideRight} className="toggle-button"/>
            </div>
        )
    )
};


export default CarouselComponent