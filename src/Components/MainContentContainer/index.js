import React from 'react'

const MainContentContainer = (props) => {

    const allComponents = props.components

    const displayComponents = allComponents.map((component, index) => (
        <div key={index}>
            <hr className="component-separator"/>
            {component}
        </div>
    ))
    
    return (
        <div>
            {props.introduction}
            {displayComponents}
        </div>
    )
}

export default MainContentContainer