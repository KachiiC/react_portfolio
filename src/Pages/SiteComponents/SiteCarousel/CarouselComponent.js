import React,{useState} from 'react'
import Icon from 'react-fa'

const CarouselComponent = ({ images }) => {

    const [index, setIndex] = useState(0); 
  
    const slideRight = () => {
      setIndex((index + 1) % images.length);
    };
  
    const slideLeft = () => {
      const nextIndex = index - 1;
      if (nextIndex < 0) {
        setIndex(images.length - 1); 
      } else {
        setIndex(nextIndex);
      }
    };
  
    return (
        images.length > 0 && (
            <div>
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