import React from 'react'
// Components
import GoogleAPIIntroduction from './GoogleAPIIntroduction'
import YoutubePlaylist from './YoutubePlaylist'
import YoutubePlaylistOffline from './YoutubePlaylist/YoutubePlaylistOffline'

const GoogleAPI = () => {

    const onlineMode = "no"

    const renderStatus = onlineMode === "no" ? 
        <YoutubePlaylistOffline /> : 
        <YoutubePlaylist />

    return (
        <div>
            <h1>Google API</h1>
            <GoogleAPIIntroduction />
            {renderStatus}
        </div>
    )
}

export default GoogleAPI