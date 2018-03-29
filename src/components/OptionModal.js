import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal 
    isOpen={!!props.selectedOption} 
    contentLabel="Computer God Selected Option"
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">ComputerGod Says</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>OK</button>
  </Modal>
)

export default OptionModal