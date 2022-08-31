import React, { useState } from 'react';
import { searchArray, selectedPages } from '../../utils/search.js';
import './searchbar.css'

function Searchbar() {
  
    const [ pages, setPages ] = useState("")
   
    const pagesHandleChange = event => {
        setPages(event.target.value)
        console.log('coucou')
    }
  
    document.querySelectorAll(".search").forEach(input => input.addEventListener("keyup", searchArray))
    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", selectedPages))

    return (
    <section className='searchbar'>
        <div className='pages'>
            <p> Show </p>
            <select className='select' onChange={pagesHandleChange} value={pages}> 
                <option className='option'  value = '10' >  10  </option>
                <option className='option'  value = '25' >  25  </option>
                <option className='option'  value = '50' >  50  </option>
                <option className='option'  value = '100'> 100  </option>
            </select>
            <p> entries </p>
        </div>  
    </section>
  )
}

export default Searchbar