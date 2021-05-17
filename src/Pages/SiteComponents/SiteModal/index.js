import React, {useState} from 'react'
// CSS
import './ModalComponent.css'
// Data
import ModalComponent from './ModalComponent';

const SiteModal = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [result, setResult] = useState([])
      
    const ModalItems = props.data.map((item, index) => {
      
      const reset = () => setResult(item) 
      
        return (
          <div className="cursor-pointer" 
            key={index} 
            onClick={() => {
              reset(); 
              setShowModal(true)
            }}
          >
            {item.component}
          </div>
        )
      }
    )
      
    return (
        <>
          {showModal && (
            <ModalComponent closeModal={() => setShowModal(false)}>
              {result.content}
            </ModalComponent>
          )}
          {ModalItems}
        </>
    )
}
export default SiteModal