import React from 'react';
import './modal.css';

function Modal() {

  return (
    <>
      <section 
      className='modal'
    >
      <div className='modal-container'>
        <p className='modal-text'>
          Employee Created!
        </p>
        <button 
          className='close-modal'
          onClick={closeModal}>
         X
        </button>
      </div>
      
    </section>
    </>
   
  )
}

export default Modal