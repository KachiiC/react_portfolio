import React from 'react'
// CSS
import './API.css'
// Components
import ApiIntoduction from './ApiIntrodcution'
import GoogleAPI from './GoogleAPI'
import RapidAPI from './RapidAPI'
import DjangoRFW from './DjangoRFW'

const Api = () =>  (
    <div>
        <ApiIntoduction />
        <GoogleAPI />
        <RapidAPI />
        <DjangoRFW />
    </div>
)



export default Api