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
                <div className="api-component-card">
                    <Imdb/>
                </div>
                <div className="api-component-card">
                    <OpenWeather/>
                </div>
            </div>
        </div>
    )

}

export default RapidAPI