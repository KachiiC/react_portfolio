import React from 'react'
// CSS
import './API.css'
// Components
import ApiIntroduction from './ApiIntroduction'
import GoogleAPI from './GoogleAPI'
// import RapidAPI from './RapidAPI'
// import DjangoRFW from './DjangoRFW'

const API = (
    <div className="w-80 api-container">
        {ApiIntroduction}
        {GoogleAPI}
    </div>
)



export default API