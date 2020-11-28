import React from 'react'
// Components
import ComponentContainer from 'Components/ComponentContainer'
import DisplayModal from './DisplayModal'

const SiteModal = () => (

    <ComponentContainer
      title="React Modal"
      introduction="To use this modal, open the 'Data/SiteComponents/ModalData.js' file. 
      Editing the data on this file detirmines which image activates the modal and the contents 
      of the modal."
      component={<DisplayModal />}
      >
        The data in the ModalData file is stored in as an array, so a map function is used to 
        return each of the image urls. The image urls are used to display each of the modal images.
        Each image is assigned a "rename" and "changeVisibility" function. The "rename" function uses 
        state to assign result to the same properties as the image clicked. The "changeVisibility"
        function changes the visibility of the the modal. Clicking the "X" when the modal appears
        closes the modal.
    </ComponentContainer>

)

export default SiteModal