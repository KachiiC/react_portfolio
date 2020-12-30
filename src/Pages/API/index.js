import React from 'react'
// CSS
import './API.css'
// Components
import ApiIntroduction from './ApiIntroduction'
import GoogleAPI from './GoogleAPI'
import RapidAPI from './RapidAPI'
import DjangoRFW from './DjangoRFW'

const API = () =>  {
    
    return (
        <div>
            <ApiIntroduction />
            <GoogleAPI />
            <RapidAPI />
            <DjangoRFW />
        </div>
    )
}



export default API