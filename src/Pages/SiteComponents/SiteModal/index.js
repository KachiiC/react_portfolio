import React from 'react'
import DisplayModal from './DisplayModal'

const SiteModal = () => (

  <div className="component-item">
    <h2>Site Modals</h2>
    <p>To use this modal, open the "SiteModal/ModalData.js" file. The data on this file detirmines 
      image activates the modal and the contents of the modal. Simple edit the data to get started!
    </p>
    <DisplayModal />
    <h4>So how does it work?</h4>
    <p>The data in the ModalData file is stored in as an array, so a map function is used to 
      return each of the image urls. The image urls are used to display each of the modal images.
      Each image is assigned a "rename" and "changeVisibility" function. The "rename" function uses 
      state to assign result to the same properties as the image clicked. The "changeVisibility"
      function changes the visibility of the the modal. Clicking the "X" when the modal appears
      closes the modal.
    </p>
  </div>

)

export default SiteModal