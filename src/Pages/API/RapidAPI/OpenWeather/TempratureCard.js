import React from 'react'

const TempratureCard = (props) => {
    return (
        <div className="temprature-card-container">
            <img className="temprature-card-image"
                src={props.image}
                alt="Avatar" 
            />
            <div className="temprature-card-description-container">
                <h4>{props.title}</h4>
                <h4>{props.temperature}</h4>
                    {props.description}
                    <br/>
                    ({props.sub_description})
            </div>
        </div>
    )
} 

export default TempratureCard