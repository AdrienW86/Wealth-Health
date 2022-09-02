import React from 'react'

function Pagination() {
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

export default Pagination