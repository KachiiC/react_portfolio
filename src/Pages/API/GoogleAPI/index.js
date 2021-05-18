import React from 'react'
// CSS
import './GoogleAPI.css'
// Components
import {GoogleAPIIntroduction} from 'Data/API/ApiIntroduction'
import YoutubeComponent from './Components/YoutubeComponent'
import BooksComponent from './Components/BooksComponent'

const GoogleAPI = (props) => (

    <div className="api-section">
        <h1>Google API</h1>
        {GoogleAPIIntroduction}
        <YoutubeComponent 
            playlist={props.data.playlist}
            api_key={props.api_key}
            items={props.data.items}
        />
        <BooksComponent api_key="AIzaSyCJ9VxrHmPRHEkzS1Dq85cC9H6bYUD5tXQ" />
    </div>
    
)

export default GoogleAPI