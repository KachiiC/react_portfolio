import React from 'react'
// CSS
import './API.css'
// Components
import ApiIntoduction from './ApiIntrodcution'
import GoogleAPI from './GoogleAPI'
import RapidAPI from './RapidAPI'
import DjangoRFW from './DjangoRFW'

const Api = () =>  {
    
    const allComponents = [
        <GoogleAPI />,
        <RapidAPI />,
        <DjangoRFW />
    ]

    const displayComponents = allComponents.map((component, index) => (
        <div key={index}>
            <hr className="component-separator"/>
            {component}
        </div>
    ))

    return (

        <div>
            <ApiIntoduction />
            {displayComponents}
        </div>
    )
}



export default Api