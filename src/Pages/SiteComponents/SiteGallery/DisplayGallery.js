import React, {useState, useEffect} from 'react'
// Component
import GalleryComponent from './GalleryComponent';
// CSS
import './GalleryComponent.css'

const DisplayGallery = () => {
    const [query, setQuery] = useState(""); 
    const [images, setImages] = useState([]); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=18866569-6f34f2906812f25069d16a3da&q=${query}`
          ).then((response) => response.json())
        .then(
            ({ hits }) => hits.map(({ webformatURL }) => webformatURL)
        ) 
        .then(
            setImages 
        )
        .catch(err => console.log(err))
    },[query])
  
    return (
        <div className="gallery-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="image-carousel-search" 
                    onChange={(e) => setQuery(e.target.value)} />
                <input 
                    type="submit" 
                    value="Search"
                    className="image-carousel-search-button"
                />
            </form>
            <GalleryComponent images={images} />
        </div>
      )
    
}
export default DisplayGallery