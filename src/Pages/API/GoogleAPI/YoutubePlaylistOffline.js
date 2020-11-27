import React from 'react'
// Compontents
import ComponentContainer from 'Components/ComponentContainer'
import CarouselComponent from 'Pages/SiteComponents/SiteCarousel/CarouselComponent'
import YoutubePlaylistData from 'Data/API/YoutubePlaylistData'

const YoutubePlaylist = () => {

    const youtubeItems = YoutubePlaylistData

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