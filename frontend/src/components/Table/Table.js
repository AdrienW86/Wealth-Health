import React, { useEffect, useState } from 'react';
import { columns } from '../../data/table.js';
import './table.css';

const Table =({currentPosts, value}) => {
  // eslint-disable-next-line
 const [ posts, setPosts] = useState(currentPosts)

 useEffect(() => {
  setPosts(currentPosts)
 },[currentPosts])

   const sortByAsc = (e) => {
  
    const value = e.target.value
      currentPosts =[...new Set(currentPosts.sort((a, b)=> a[value].localeCompare(b[value])))] 
      setPosts(currentPosts)
    }

  const sortByDesc = (e) => {
  
    const value = e.target.value
      currentPosts =[...new Set(currentPosts.sort((a, b)=> b[value].localeCompare(a[value])))] 
      setPosts(currentPosts)
    }

  return (
    <>
    <table className='table' aria-label='table of employe'>
      <thead className='table-header'>
        <tr className='columns'>          
        {columns.map((column) => {
            return <th className='table-columns' key={column.id}> {column.headerName} 
              <div className='btn-container' >               
                <button 
                className='btn-up'
                aria-label='btn asc'
                value={column.field}
                onClick={sortByAsc}
                >
                </button>               
                <button 
                  className='btn-down' 
                  aria-label='btn desc'
                  value={column.field}
                  onClick={sortByDesc}
                >
                </button>                
              </div>            
            </th>
        })}
        </tr>
      </thead>
      <tbody className='table-body'>
        {posts
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