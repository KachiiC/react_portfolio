import React from 'react'
// Components
import GoogleAPIIntroduction from './GoogleAPIIntroduction'
// import YoutubePlaylist from './YoutubePlaylist'
import YoutubePlaylistOffline from './YoutubePlaylistOffline'

const GoogleAPI = () => {

    return (
        <div>
            <h1>Google API</h1>
            <GoogleAPIIntroduction />
            {/* <YoutubePlaylist /> */}
            <YoutubePlaylistOffline />
        </div>
    )
}

export default GoogleAPI