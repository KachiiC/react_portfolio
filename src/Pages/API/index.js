import React from 'react'
// CSS
import './API.css'
// Components
import ApiIntroduction from './ApiIntroduction'
import GoogleAPI from './GoogleAPI'
// DATA
import {YoutubeData, GoogleAPIKey} from 'Data/API/GoogleApiData'
// import RapidAPI from './RapidAPI'
// import DjangoRFW from './DjangoRFW'

const API = (
    <div className="w-80 api-container">
        {ApiIntroduction}
        <GoogleAPI data={YoutubeData} api_key={GoogleAPIKey} />
    </div>
)

export default API