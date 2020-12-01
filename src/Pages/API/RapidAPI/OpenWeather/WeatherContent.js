import React, {useState, useEffect} from 'react'
// Key
import RapidApiKey from 'Api_key/RapidAPIKey'
// Components
import TempratureCard from './TempratureCard'
import WeatherContentIntroduction from './WeatherContentIntroduction'

const WeatherContent = () => {

    const [showResults, setShowResults] = useState(false)
    const [queryCity, setQueryCity] = useState("")
    const [weather, setWeather] = useState({
      "city": {
        "name": "",
      },
      "list": [
        {
          "dt": 0,
          "temp": {
            max: 0
          },
          "weather": [
            {"main": "",}
          ]
        }
      ]
    })

    const getWeather = data => {
      data.preventDefault()
      setQueryCity(document.getElementById("city").value)
    }

    useEffect(() => {
      if (queryCity !== ""){
        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${queryCity}&cnt=3&units=metric`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": RapidApiKey,
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(weatherData => {
          setWeather(weatherData)
          setShowResults(true)
        })
        .catch(err => console.log(err))
      }
    } , [queryCity])

    const dayWeather = weather.list.map((day, index) => {

      const weatherDate = new Date(day.dt * 1000)
      const formattedWeatherDate = weatherDate.toLocaleDateString("en-UK", {
          day: "2-digit",
          month: "short",
      })

      const displayTemprature = Math.floor(day.temp.max)

      return (
            <TempratureCard
              image={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              title={formattedWeatherDate}
              temperature={`${displayTemprature}°C`}
              description={`${day.weather[0].main}`}
              sub_description={`${day.weather[0].description}`}
              key={index}
            />
      )

    })

    return (
        <div className="weather-modal-content">
            <WeatherContentIntroduction />
            <div className="weather-api-component">
                <h2>Which city do you want to check?!</h2>
                <form onSubmit={getWeather}>
                <input 
                    id="city" 
                    className="city-search"
                    placeholder="Please enter a city/town..."
                />
                </form>
                { showResults && (
                    <div className="weather-forecast-results">
                        <div className="what-is-weather-text">
                            What is the weather like in... <b>{weather.city["name"]}</b>?
                        </div>
                        <div className="weather-cards-container">
                        {dayWeather}
                        </div>
                    </div>
                )}             
            </div>
      </div>
    );

}

export default WeatherContent