import React from 'react'

const SuccessfulResult = (props) => {

    const genres = props.genres

    const displayGenres = genres.slice(0,2).map((genre, index) => (
        <button className="genre-button" key={index}>
            {genre}
        </button>
    ))

    return (
        <div className="result_container">
            <div className="successful-result-details">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="genre-buttons-container">
                    {displayGenres}
                </div>
            </div>
            <div className="imdb-poster-container">
                <img src={props.image} 
                    className="search_result_poster"
                    alt="result_poster" 
                />
            </div>
        </div>
    )
}

export default SuccessfulResult