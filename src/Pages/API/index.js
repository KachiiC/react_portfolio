import React from 'react'
// CSS
import './API.css'
import MainContentContainer from 'Components/MainContentContainer'
// Components
import ApiIntroduction from './ApiIntroduction'
import GoogleAPI from './GoogleAPI'
import RapidAPI from './RapidAPI'
import DjangoRFW from './DjangoRFW'

const API = () =>  {
    
    const componentsList = [
        <GoogleAPI />,
        <RapidAPI />,
        <DjangoRFW />
    ]

    return (
        <MainContentContainer 
            introduction={<ApiIntroduction />}
            components={componentsList}
        />
    )
}



export default API