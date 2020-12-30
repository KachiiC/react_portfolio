import React, {useState} from 'react'
// Components
import CardComponent from 'Pages/SiteComponents/SiteCard/CardComponent'
import ModalComponent from 'Pages/SiteComponents/SiteModal/ModalComponent'


const RapidApiCard = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            { 
                showModal && (
                    <ModalComponent closeModal={() => {setShowModal(false)}}>
                        <div className="rapid-api-modal-content">
                            <div className="rapid-api-description">
                                {props.introduction}
                            </div>
                            <div className="rapid-api-component">
                                {props.children}
                            </div>
                        </div>
                    </ModalComponent>
                )
            }
            <div onClick={() => {setShowModal(true)}}>
                <CardComponent 
                    image={props.image}
                    title={props.title}
                    description={props.description}
                />
            </div>
        </>
    )

}

export default RapidApiCard