import React from 'react'

const ComponentContainer = (props) => {

    return (
        <div className="component-item">
            <h1>{props.title}</h1>
            <p>{props.introduction}
            </p>
            {props.component}
            <h4>So how does it work?</h4>
            <p>{props.children}</p>
        </div>
    )
}
export default ComponentContainer