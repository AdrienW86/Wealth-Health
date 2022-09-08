import React from 'react';
import './searchbar.css';

 const Searchbar = ({setValue}) => {

    const handleChange = e => {
        setValue(e.target.value)
    }
    return (
    <section className='search-container'>
        <input 
            type ='text'
            className ='search'
            placeholder ='Search'
            onChange={handleChange}
        />
    </section> 
  )
}

export default Searchbar