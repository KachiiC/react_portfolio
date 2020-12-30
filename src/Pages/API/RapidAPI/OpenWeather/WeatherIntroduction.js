import React from 'react'

const WeatherIntroduction = () => (
        <div>
            <h1>Open Weather API</h1>
            <p>
                A simple weather app built with <b>Open Weather Api</b>.<br/><br/>
                The input bar takes a city/town as it's an argument and sets it as the state
                "queryCity". When the first query is submitted, useEffect will use string 
                interpolation to pass queryCity into the url before making the Api GET request.
                The response will be converted into json and set to the state "weather".
            </p>
            <p>
                Once the weather data is gathered, the parts we'll take are the "city" and "list".
                The city is used will be displayed so the user can keep track of which city they
                are viewing. "list" displays the weather information for each day. As list returned
                as an array, running a map function to return the date, weather description and 
                tempature is all we need to. Adding them to a modified version of the react-card
                and we're done!
            </p>
        </div>

)

export default WeatherIntroduction