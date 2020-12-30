import React from 'react'
import RapidApiCard from '../RapidApiCard'
import WeatherImage from 'Data/Images/open_weather.jpg'
// CSS 
import './OpenWeather.css'
// Components
import WeatherContent from './WeatherContent'
import WeatherIntroduction from './WeatherIntroduction'

const OpenWeather = () => (
    <div className="api-component-card">
        <RapidApiCard
            introduction={<WeatherIntroduction/>}
            image={WeatherImage}
            title="Open Weather"
            description="A project using the Open Weather API"
        >
            <WeatherContent />
        </RapidApiCard>
    </div>
)

export default OpenWeather