import React from 'react'
// CSS
import './ComponentContainer.css'

const ComponentContainer = (props) => (

    <div className="component-item w-90">
        <h2>{props.title}</h2>
        {props.introduction}
        {props.component}
        <h4 className="text-center">So how does it work?</h4>
        {props.description}
    </div>
    
)

export default ComponentContainer