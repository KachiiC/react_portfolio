import React from 'react'
// CSS
import './SiteComponents.css'
// Components
import ComponentContainer from 'Components/ComponentContainer'
import SiteComponentsIntroduction from './SiteComponentIntroduction'
import SiteComponentsList from 'Data/Components/SiteComponents/'

const SiteComponents = () => {

    const displayedComponents = SiteComponentsList.map((component, index) => (
        <div key={index}>
            <ComponentContainer 
                title={component.title}
                description={component.description}
                component={component.component}
                introduction={component.introduction}
            />
            <hr />
        </div>
    ))
    
    return (
        <div className="site-components-container">
            <h1>Site Components</h1>
            {SiteComponentsIntroduction}
            {displayedComponents}
        </div>
    )
}

export default SiteComponents