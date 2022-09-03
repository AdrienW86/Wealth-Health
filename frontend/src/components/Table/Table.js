import React from 'react';
import { columns } from '../../data/table.js';
import './table.css';

const Table =({currentPosts, value}) => {

 
  
 // const table = JSON.parse(localStorage.getItem("list"))
 
  const sortByAsc = (e) => {
    console.log("filtré par ordre croissant")
    console.log(e.target.nextSibling)
    console.log(e.target.className)
    let btn = e.target.className

    if(btn === "btn-up 1") {
      console.log("test")
      currentPosts.sort(function(a, b){
        return a.firstname.localeCompare(b.firstname) 
      })
    }
    else if (btn ==="btn-up 2") {
      currentPosts.sort(function(a, b){
        return a.lastname.localeCompare(b.lastname) 
      })
    }
    else if (btn ==="btn-up 3") {
      currentPosts.sort(function(a, b){
        return new Date(a.startDate) - new Date(b.startDate) 
      })
    }
    else if (btn ==="btn-up 4") {
      currentPosts.sort(function(a, b){
        return a.department.localeCompare(b.department) 
      })
    }
    else if (btn ==="btn-up 5") {
      currentPosts.sort(function(a, b){
        return new Date(a.dateOfBirth) - new Date(b.dateOfBirth) 
      })
    }
    else if (btn ==="btn-up 6") {
      currentPosts.sort(function(a, b){
        return a.street.localeCompare(b.street) 
      })
    }
    else if (btn ==="btn-up 7") {
      currentPosts.sort(function(a, b){
        return a.city.localeCompare(b.city) 
      })
    }
    else if (btn ==="btn-up 8") {
      currentPosts.sort(function(a, b){
        return a.state.localeCompare(b.state) 
      })
    }
    else if (btn ==="btn-up 9") {
      currentPosts.sort(function(a, b){
        return a.zip.localeCompare(b.zip) 
      })
    }    
   // e.target.disabled = true
  //  e.target.nextSibling.disabled = false
   // setToggle(false)
  }

  const sortByDesc = (e) => {
    console.log("filtré par ordre décroissant")
    console.log(e.target.previousSibling)
   // e.target.disabled = true
   // e.target.previousSibling.disabled = false
   let btn = e.target.className
   // setToggle(true)

    if(btn === "btn-down 1") {
      currentPosts.sort(function(a, b){
        return b.firstname.localeCompare(a.firstname) 
      })
    }
    else if (btn ==="btn-down 2") {
      currentPosts.sort(function(a, b){
        return b.lastname.localeCompare(a.lastname) 
      })
    }
    else if (btn ==="btn-down 3") {
      currentPosts.sort(function(a, b){
        return new Date(b.startDate) - new Date(a.startDate) 
      })
    }
    else if (btn ==="btn-down 4") {
      currentPosts.sort(function(a, b){
        return b.department.localeCompare(a.department) 
      })
    }
    else if (btn ==="btn-down 5") {
      currentPosts.sort(function(a, b){
        console.log(b.dateOfBirth)
        return new Date(b.dateOfBirth) - new Date(a.dateOfBirth)
      })
    }
    else if (btn ==="btn-down 6") {
      currentPosts.sort(function(a, b){
        return b.street.localeCompare(a.street) 
      })
    }
    else if (btn ==="btn-down 7") {
      currentPosts.sort(function(a, b){
        return b.city.localeCompare(a.city) 
      })
    }
    else if (btn ==="btn-down 8") {
      currentPosts.sort(function(a, b){
        return b.state.localeCompare(a.state) 
      })
    }
    else if (btn ==="btn-down 9") {
      currentPosts.sort(function(a, b){
        return b.zip.localeCompare(a.zip) 
      })
    }
  }
  
  return (
    <>
    <table className='table'>
      <thead className='table-header'>
        <tr className='columns'>          
        {columns.map((column) => {
            return <th className='table-columns' key={column.id}> {column.headerName} 
              <div className='btn-container' >               
                <button 
                className={`btn-up ${column.id}`}
                onClick={sortByAsc}
                >
                </button>               
                <button 
                  className={`btn-down ${column.id}`}
                  onClick={sortByDesc}
                >
                </button>                
              </div>            
            </th>
        })}
        </tr>
      </thead>
      <tbody className='table-body'>
      {currentPosts
        .filter((val)=> {
          return val.firstname.toLowerCase().includes(value.toLowerCase()) ||
                 val.lastname.toLowerCase().includes(value.toLowerCase()) ||
                 val.startDate.includes(value) ||
                 val.department.toLowerCase().includes(value.toLowerCase()) ||
                 val.dateOfBirth.includes(value) ||
                 val.street.toLowerCase().includes(value.toLowerCase()) ||
                 val.city.toLowerCase().includes(value.toLowerCase()) ||
                 val.state.toLowerCase().includes(value.toLowerCase()) ||
                 val.zip.includes(value) 
        })
        .map((val, index) => {
          return <tr className='user-info' key= {index}>
                  <td className='body-columns'> {val.firstname} </td>
                  <td className='body-columns'> {val.lastname} </td>
                  <td className='body-columns'> {val.startDate} </td>
                  <td className='body-columns'> {val.department} </td>
                  <td className='body-columns'> {val.dateOfBirth} </td>
                  <td className='body-columns'> {val.street} </td>
                  <td className='body-columns'> {val.city} </td>
                  <td className='body-columns'> {val.state} </td>
                  <td className='body-columns'> {val.zip} </td>
                </tr>
        })
      }
      </tbody>     
    </table>  
     </>
  )
}

export default Table