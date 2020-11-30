import React, {useState} from 'react'
// Components
import ImdbImage from 'Data/Images/imdb.png'
import CardComponent from 'Pages/SiteComponents/SiteCard/CardComponent'
import ModalComponent from 'Pages/SiteComponents/SiteModal/ModalComponent'
import ImdbContent from './ImdbContent'


const ImdbCard = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
        { showModal && (
            <ModalComponent closeModal={() => {setShowModal(false)}}>
                <div className="modal-content">
                    <ImdbContent />
                </div>
                </ModalComponent>
            )}
            <div onClick={() => {setShowModal(true)}}>
                <CardComponent 
                    image={ImdbImage}
                    title="IMDB"
                    description="A project using the Imdb API"
                />
            </div>
        </>
    )

}

export default ImdbCard