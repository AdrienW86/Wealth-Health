import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
//import Modal from '../../components/Modal/Modal';
import './home.css';

function Home() {

  const [toggle, setToggle] = useState(false)
  const closeModal = () => {
    setToggle(false)
  }

  return (
    <>
      <Header />
      <section className='container'>
        <Title />                
        <Form />       
      </section>       
        {toggle ?
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
                :
           <div></div>     
        }       
    </>
  )
}
export default Home