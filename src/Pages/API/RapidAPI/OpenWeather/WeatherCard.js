import React, {useState} from 'react'
import ImdbImage from 'Data/Images/open_weather.jpg'
import CardComponent from 'Pages/SiteComponents/SiteCard/CardComponent'
import ModalComponent from 'Pages/SiteComponents/SiteModal/ModalComponent'
import WeatherContent from './WeatherContent'

const OpenWeather = () => {
    // Components
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        { showModal && (
            <ModalComponent closeModal={() => {setShowModal(false)}}>
                <div className="modal-content">
                    <WeatherContent />
                </div>
            </ModalComponent>
            )}
            <div onClick={() => {setShowModal(true)}}>
                <CardComponent 
                    image={ImdbImage}
                    title="Open Weather"
                    description="A project using the Open Weather API"
                />
            </div>
        </>
    )
}

export default OpenWeather