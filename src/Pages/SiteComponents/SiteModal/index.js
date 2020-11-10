import React, {useState} from 'react'
// CSS
import './ModalComponent.css'
// Data
import modalData from './modalData'
import ModalComponent from './ModalComponent';

const SiteModal = () => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
      
    const displayPictures = modalData.map((item) => {
      const rename = () =>  setResult(item) 
      const changeVisibility = () => setShowModal(true)
      
        return (
              <div className="gallery-item">
                <img src={item.url} 
                    alt="modal-click"
                    onClick={() => {changeVisibility();rename()}} 
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
          <h2>Site Modals</h2>
          <p> It's simple, all the data is stored on the "modalData.js" file. Instead of 
              having an individal modal for each picture, this site modal is built using
              the useState function. When you click on an image, react will take the object 
              that image belongs using "useState" and load that content onto the modal.
          </p>
          <div className="site-container">
            <div className="gallery-row">
              {displayPictures}
            </div>
          </div>
        </>
    )
}
export default SiteModal