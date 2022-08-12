import React, { useState } from 'react';
import Form from '../../components/Form/Form';
//import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import './home.css';




function Home() {

  const [toggle, setToggle] = useState(false)

  const closeModal = () => {
    setToggle(false)
  }


  return (
    <>
     <section>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to = "/list">View Current Employees</Link>
            <h2>Create Employee</h2>
         <Form />
            
        </div>
       
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