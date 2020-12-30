import React from 'react'
import ImdbImage from 'Data/Images/imdb.png'
import RapidApiCard from '../RapidApiCard'
// CSS
import './Imdb.css'
// Components
import ImdbContent from './ImdbContent'
import ImbdIntroduction from './ImdbIntroduction'

const Imdb = () =>  (
    <div className="api-component-card">
        <RapidApiCard
            introduction={<ImbdIntroduction/>}
            image={ImdbImage}
            title="IMDB"
            description="A project using the Imdb API"
        >
            <ImdbContent />
        </RapidApiCard>
    </div>
)

export default Imdb