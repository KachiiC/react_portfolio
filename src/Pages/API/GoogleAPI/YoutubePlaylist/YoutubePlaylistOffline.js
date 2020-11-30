import React from 'react'
// CSS
import './YoutubePlaylist.css'
// Compontents
import { HashLink as Link } from 'react-router-hash-link'
import ComponentContainer from 'Components/ComponentContainer'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
import YoutubePlaylistData from 'Data/API/YoutubePlaylistData'

const YoutubePlaylist = () => {

    const youtubeItems = YoutubePlaylistData.map(item => item.snippet.thumbnails.maxres.url)

    return (
            <ComponentContainer
                title="Youtube Api"
                introduction="Google provides a youtube api which allows developers to embed
                a number of different things including playlists, channel info and searches.
                below i've made a carousel from a youtube playlist."
                component={
                    <div className="youtube-carousel">
                        <CarouselComponent 
                            images={youtubeItems} 
                        />
                    </div>
                }
            >
                The GET request to the Youtube API returns each item in a playlist as an array of 
                objects (one for each video in the playlist). A map function is then used to 
                return the thumbnail from each video in that chosen playlist and placed then
                we can place in the <a href="/site-components#carousel">react carousel.</a>
            </ComponentContainer>
    )

}

export default YoutubePlaylist