import React from 'react'
// CSS
import './ComponentContainer.css'

const ComponentContainer = (props) => (

    <div className="component-item">
        <h2>{props.title}</h2>
        <p>{props.introduction}
        </p>
        {props.component}
        <h4>So how does it work?</h4>
        <p>{props.description}</p>
    </div>
    
)

export default ComponentContainer