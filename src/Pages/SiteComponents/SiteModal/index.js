import React from 'react'
import DisplayModal from './DisplayModal'

const SiteModal = () => (
  <div className="component-item">
    <h2>Site Modals</h2>
    <p>All the data is stored on the "SiteModal/modalData.js" file. Simply edit the data, and 
      when you click on the modal picture, a modal will pop up!</p>
    <DisplayModal />
    <h4>So how does it work?</h4>
    <p> Instead of having an individal modal for each picture, this site modal is built using
        the useState function. When you click on an image, react will take the object that image 
        belongs using "useState" and load that content onto the modal.
    </p>
  </div>

)
export default SiteModal