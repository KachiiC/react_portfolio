import React from 'react'
// Components
import Imdb from './Imdb'
import OpenWeather from './OpenWeather'
// CSS
import './RapidApi.css'
import RapidApiIntroduction from './RapidApiIntroduction'

const RapidAPI = () => {

    const rapidApiComponets = [<Imdb/>, <OpenWeather />]

    const displayRapidApiComponets = rapidApiComponets.map((component, index) => (
            <div className="api-component-card" key={index}>
                {component}
            </div>
        )
    )

    return (
        
        <div>
            <h1>Rapid API</h1>
            <RapidApiIntroduction />
            <div className="rapid-api-components-container">
                {displayRapidApiComponets}
            </div>
        </div>
    )

}

export default RapidAPI