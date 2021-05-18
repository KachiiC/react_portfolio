import React from 'react'

const CardComponent = (props) => {

    const titleLength = props.title.split("")

    const titleLogic = titleLength.length < 15 ? props.title : titleLength.slice(0, 20).join("") + "..."
    
    return (
        <div className={`site-span-${props.size}`}>
            <div className="m-auto w-80"
            >
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.image}
                        className="site-responsive-image"
                        style={{"height": `${props.card_height}px`}}
                        alt="Avatar" 
                    />
                </a>
                <div className="card-description-container">
                    <h4 className="text-center">
                        {titleLogic}
                    </h4> 
                    <p className="text-left">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardComponent