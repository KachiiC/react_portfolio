import React, {useState} from 'react'
// CSS
import './ModalComponent.css'
// Data
import modalData from 'Data/SiteComponents/ModalData'
import ModalComponent from './ModalComponent';

const DisplayModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
      
    const displayPictures = modalData.map((item, index) => {
      
      const rename = () =>  setResult(item) 
      const changeVisibility = () => setShowModal(true)
      
        return (
              <div className="gallery-item" key={index}>
                <img src={item.url} 
                    alt="modal-click"
                    onClick={() => {rename(); changeVisibility()}} 
                />
              </div>
        )
      }
    )

      
    return (
        <>
          { showModal && (
            <ModalComponent closeModal={() => setShowModal(false)}>
              <div className="modal-content">
                <h3>{result.modal_title}</h3>
                <p>{result.modal_content}</p>
              </div>
            </ModalComponent>
          )}
          <div className="site-container">
            <div className="gallery-row">
              {displayPictures}
            </div>
          </div>
        </>
    )
}
export default DisplayModal