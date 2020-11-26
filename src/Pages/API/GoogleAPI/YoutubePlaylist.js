import React from 'react'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
// uncomment out the line below if you want to do not need to connect to the Google API
// import YoutubePlaylistData from 'Data/API/YoutubePlaylistData'
// comment out these lines if you do not need to talk to the API if you do not need
import { useEffect, useState } from 'react'
import GoogleAPIKey from 'Api_key/GoogleAPIKey'

const YoutubePlaylist = () => {
    
    // If you do not need to talk to the API Server, uncomment this line and comment 

    // Offline Data
    // const youtubeItems = YoutubePlaylistData 

    // Fetch section start
    const [youtubeItems, setYoutubeItems] = useState([])
    const playlist_url = "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    const results_number = 18

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_url}&key=${GoogleAPIKey}&part=snippet,id&order=date&maxResults=${results_number}`)
        .then((response) => response.json())
        .then((dataFromYoutube) => {
            setYoutubeItems(dataFromYoutube.items)
        })
        .catch((error) => console.log(error))
    },[playlist_url, results_number])
    // Fetch section end
    
    const youtubeImagesList = youtubeItems.map(item => item.snippet.thumbnails.maxres.url)

    return (
        <div>
            <h1>Youtube Playlist</h1>
            <CarouselComponent images={youtubeImagesList} />
        </div>
    )

}

export default YoutubePlaylist