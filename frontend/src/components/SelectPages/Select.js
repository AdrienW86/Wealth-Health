import React from 'react';
import './select.css'

const SelectPages = ({pagesHandleChange}) => {
  
return (
    <section className='select-container'>
        
            <p> Show </p>
            <select 
                className='select' 
                onChange={pagesHandleChange}
            > 
                <option className='option'  value = '10' >  10  </option>
                <option className='option'  value = '25' >  25  </option>
                <option className='option'  value = '50' >  50  </option>
                <option className='option'  value = '100'> 100  </option>
            </select>
            <p> entries </p>
          
    </section>
  )
}

export default SelectPages