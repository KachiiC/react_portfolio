import React from 'react'
// CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const DisplayImage = (props) => {

    const { closeImage } = props;

    return (
        <div className="overlay">
            <div className="full-screen-container">
                <div className="full-screen-image-container">
                    <img src={props.selection} 
                        alt="selected-pic"
                        className="full-screen-image" 
                    />
                </div>
                <FontAwesomeIcon icon={faTimes}
                    size="2x" 
                    onClick={closeImage}
                    className="close-full-screen"
                />
            </div>
        </div>
    )
}

export default DisplayImage