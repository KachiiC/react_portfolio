import React from 'react'
// CSS
import './YoutubePlaylist.css'
// Compontents
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
                introduction="introduction"
                component={
                    <div className="youtube-carousel">
                        <CarouselComponent 
                            images={youtubeItems} 
                        />
                    </div>
                }
            >
                description
            </ComponentContainer>
    )

}

export default YoutubePlaylist