import React from 'react'
// CSS
import './YoutubePlaylist.css'
// Compontents
import {Link} from 'react-router-dom'
import ComponentContainer from 'Components/ComponentContainer'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
import YoutubePlaylistData from 'Data/API/YoutubePlaylistData'

const YoutubePlaylist = () => {

    const youtubeItems = YoutubePlaylistData.map(item => item.snippet.thumbnails.maxres.url)
    const youtubeLinks = YoutubePlaylistData.map(item => item.snippet.resourceId.video_id)

    console.log(youtubeLinks)

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
                            links={youtubeLinks}
                        />
                    </div>
                }
            >
                Once the call is made, I've taken the thumbnail from each picture and placed it
                in the <Link to="site-components#carousel">react carousel.</Link>
            </ComponentContainer>
    )

}

export default YoutubePlaylist