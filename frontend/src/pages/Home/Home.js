import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './home.css';

function Home() {

  return (
    <>
      <Header />
      <section className='container'>
        <Title />                              
      </section> 
      <Form /> 
    </>
  )
}
export default Home