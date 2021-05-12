import React from 'react'

const CardComponent = (props) => (
    
    <div className="site-span-6">
        <div className="m-auto w-80">
            <img src={props.image}
                className="site-responsive-image"
                alt="Avatar" 
            />
            <div className="card-description-container">
                <h4 className="text-center">
                    {props.title}
                </h4> 
                <p className="text-left">
                    {props.description}
                </p>
            </div>
        </div>
    </div>
)

export default CardComponent