import React, { useState} from 'react'
import { useEffect } from 'react'
// Components
import SuccessfulResult from './Results/SuccessfulResult'
import MultipleResults from './Results/MultipleResults'
import NoResults from './Results/NoResults'
import RapidApi_key from 'Api_key/RapidAPIKey'
import Imdb_URL from 'Api_key/Api_url/Imdb_URL'

const ImdbSearch = () => {
    
    const [inputName, setInputName] = useState("")
    const [mediaType, setMediaType] = useState("show")
    const [mediaId, setMediaId] = useState("")
    const [mediaSearchResults, setMediaSearchResults] = useState([])
    const [displayResults, setDisplayResults] = useState(false)
    const [mediaMetdata, setMediaMetadata] = useState({
        "title": "",
        "poster": "",
        "description": "",
        "genres": [] 
    })
    
    const handleSubmit = data => {
        data.preventDefault()
        const inputData = document.getElementById("input_name").value
        setMediaType(document.getElementById("media_type").value)
        setInputName(inputData)
    }

    useEffect(()=> {
        if (inputName !== "") {
            const inputUrl = inputName.split(" ").join("%20")
            fetch(`${Imdb_URL}?type=get-${mediaType}s-by-title&title=${inputUrl}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": RapidApi_key,
                    "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then((response) => {
                setDisplayResults(false)
                if (response.search_results === 0) {
                    setMediaId("")
                    setMediaSearchResults([])
                    setDisplayResults(true)
                } else {
                    if (response.search_results > 1) {
                        const exactMatch = mediaType === "show" ? 
                            response.tv_results.find((show) => show.title.toUpperCase() === inputName.toUpperCase()) :
                            response.movie_results.find((movie) => movie.title.toUpperCase() === inputName.toUpperCase())
        
                        if (exactMatch === undefined) {
                            setMediaId("")
                            setMediaSearchResults(
                                mediaType === "show" ?
                                    response.tv_results.map(result => result.title): 
                                    response.movie_results.map(result => result.title)
                            )
                            setDisplayResults(true) 
                        } else {
                            setMediaId(exactMatch.imdb_id)
                        }
                    } else {
                        mediaType === "show" ?
                            setMediaId(response.tv_results[0].imdb_id):
                            setMediaId(response.movie_results[0].imdb_id)
                    }
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    },[inputName, mediaType])

    useEffect(() => {
        if (mediaId !== "") {
            const mediaTypeOutput = mediaType === "movie" ? "movies" : "show"
            
            Promise.all([
                fetch(`${Imdb_URL}?imdb=${mediaId}&type=get-${mediaTypeOutput}-images-by-imdb`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": RapidApi_key,
                        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
                    }
                }).then(response => response.json()),
                fetch(`${Imdb_URL}?imdb=${mediaId}&type=get-${mediaType}-details`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": RapidApi_key,
                        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
                    }
                }).then(response => response.json())
            ])
            .then(responseData => {
                setMediaMetadata({
                    "title": responseData[0].title,
                    "poster": responseData[0].poster,
                    "description": responseData[1].description.split("").slice(0,330).join(""),
                    "genres": responseData[1].genres
                })
                setDisplayResults(true)
            })
            .catch(err => console.error(err))
        }
    },[mediaId, mediaType])

    const renderLogic = mediaId !== "" ? (
        <SuccessfulResult 
            title={mediaMetdata.title}
            image={mediaMetdata.poster}
            description={mediaMetdata.description}
            genres={mediaMetdata.genres}
        />
    ):(
        mediaSearchResults.length === 0 ? 
        (<NoResults searched={inputName} />):
        <MultipleResults results={mediaSearchResults} />
    )

    return (
        <div className="imdb-content">
            <h1>Imdb search</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    id="input_name"
                    className="input_search" 
                />
                <select id="media_type"
                    className="input_type"
                >
                    <option value="show">Show</option>
                    <option value="movie">Movie</option>
                </select>
            </form>
            { displayResults && (
                <div className="components-row">
                    {renderLogic}
                </div>
            )}
        </div>
    );

}

export default ImdbSearch