import React, { useEffect } from 'react';
import './pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage})  => {

  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginationLength = document.querySelectorAll('.pagination-btn')
  
  let prev 
  let next

  if( currentPage === 1) {
    prev = true
  }
  else if( currentPage === paginationLength.length) {
    next = true
  }

  useEffect(()=> {
    if(pageNumbers.length === 1) {
      // eslint-disable-next-line
      currentPage = 1
      paginate(currentPage)
    }
  },[pageNumbers])
  
  return (
    <nav>
      <ul className='pagination'>
        <li>
          <button
            disabled = {prev}
            className='btn-prev'
            onClick={() => paginate(currentPage -1)}
          >
            {'<<'} prev 
          </button> 
        </li>
        {pageNumbers.map(number =>(         
          <li 
            className='pagination-btn'
            key={number}
          >
            <button
              className="btn-page"
              onClick={() => paginate(number)}
             >
              {number}
            </button>
          </li>         
        ))}
         <li>
          <button
            disabled = {next}
            className='btn-next'
            onClick={() => paginate(currentPage +1)}
          >
             next {'>>'}
          </button> </li>
      </ul>
    </nav>
  )
}

export default Pagination