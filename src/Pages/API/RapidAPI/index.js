import React from 'react'
// Components
import Imdb from './Imdb'
import OpenWeather from './OpenWeather'
// CSS
import './RapidApi.css'

const RapidAPI = () => {

    return (
        <div>
            <h1>Rapid API</h1>
            <div className="rapid-api-components-container">
                <Imdb/>
                <OpenWeather/>
            </div>
        </div>
    )

}

export default RapidAPI