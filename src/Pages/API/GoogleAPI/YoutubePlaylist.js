import React from 'react'
import ComponentContainer from 'Components/ComponentContainer'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
import { useEffect, useState } from 'react'
import GoogleAPIKey from 'Api_key/GoogleAPIKey'

const YoutubePlaylist = () => {

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

    return (
        <div className="">
            <ComponentContainer
                title="Youtube Api"
                introduction="introduction"
                component={
                    <div className="youtube-container">
                        <CarouselComponent images={youtubeItems} />
                    </div>
                }
            >
                description
            </ComponentContainer>
        </div>
    )

}

export default YoutubePlaylist