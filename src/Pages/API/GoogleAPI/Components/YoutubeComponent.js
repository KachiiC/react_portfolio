import React, { useState, useEffect } from 'react'
// COMPONENTS
import SiteCarousel from 'Pages/Components/SiteComponents/SiteCarousel'

const YoutubeComponent = (props) => {

    const [youtubeItems, setYoutubeItems] = useState([{
        title: "",
        image: "",
        link: ""
    }])

    const youtubePlaylist = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${props.playlist}&key=${props.api_key}&part=snippet,id&order=date&maxResults=${props.items}`

    useEffect(() => {
        fetch(youtubePlaylist)
        .then(response => response.json())
        .then((responseData) => setYoutubeItems(
                responseData.items.map((item) => {

                    const itemContent = item["snippet"]
                    const videoId = itemContent["resourceId"]["videoId"]

                    item.title = itemContent["title"]
                    item.image = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
                    item.link = `https://www.youtube.com/watch?v=${videoId}`

                    return item
                })
            )
        )
        .catch(err => console.log(err))
    }, [youtubePlaylist])

    return (
        <div className="component-section">
            <h3>Youtube Component</h3>
            <p>This is a youtube api component</p>
            <SiteCarousel data={youtubeItems}/>
        </div>
    )
    
} 

export default YoutubeComponent