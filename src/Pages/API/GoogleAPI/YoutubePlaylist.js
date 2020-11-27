import React from 'react'
import ComponentContainer from 'Components/ComponentContainer'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
// uncomment out the line below if you want to do not need to connect to the Google API
// import YoutubePlaylistData from 'Data/API/YoutubePlaylistData'
// comment out these lines if you do not need to talk to the API if you do not need
import { useEffect, useState } from 'react'
import GoogleAPIKey from 'Api_key/GoogleAPIKey'

const YoutubePlaylist = () => {
    
    // If you do not need to talk to the API Server,
    // uncomment "Offline Data" and comment out "Fetch Section"

    // Offline Data
    // const youtubeItems = YoutubePlaylistData 

    // "Fetch Section" START
    const [youtubeItems, setYoutubeItems] = useState([{
        "snippet": {
            "thumbnails": {
                "maxres": {
                    "url": "",
                }
            }
        }
    }])    
    const playlist_url = "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    const results_number = 18

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_url}&key=${GoogleAPIKey}&part=snippet,id&order=date&maxResults=${results_number}`)
        .then((response) => response.json())
        .then((dataFromYoutube) => {
            setYoutubeItems(dataFromYoutube.items.map(item => item.snippet.thumbnails.maxres.url))
        })
        .catch((error) => console.log(error))
    },[playlist_url, results_number])
    // "Fetch Section" END


    return (
        <div>
            <ComponentContainer
                title="Youtube Api"
                introduction="introduction"
                component={<CarouselComponent images={youtubeItems} />}
                >
                description
            </ComponentContainer>
        </div>
    )

}

export default YoutubePlaylist