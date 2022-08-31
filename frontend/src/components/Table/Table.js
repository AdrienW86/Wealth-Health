import React, { useState} from 'react';
import { columns, tableData } from '../../data/table.js';
import { sortByName } from '../../utils/sort';
import './table.css';

function Table() {

  const [toggle, setToggle] = useState(true)
  const [ value, setValue ] = useState("")
  const [ array, setArray ] = useState([])

  const sortByAsc = (e) => {
    console.log("filtré par ordre croissant")
    console.log(e.target.nextSibling)
    e.target.disabled = true
    e.target.nextSibling.disabled = false
    setToggle(false)
  tableData.sort(function(a, b){
    return a.firstname.localeCompare(b.firstname) 
  })
     console.table(tableData)
  }

  const sortByDesc = (e) => {
    console.log("filtré par ordre décroissant")
    console.log(e.target.previousSibling)
    e.target.disabled = true
    e.target.previousSibling.disabled = false

    setToggle(true)

    tableData.sort(function(a, b){
      return b.firstname.localeCompare(a.firstname) 
    })
       console.table(tableData)
    }
  
  const handleChange = e => {
    setValue(e.target.value)
}

console.log((columns))



  return (

    <>
      <div className='search-container'>
            <input 
                type ='text'
                className ='search'
                placeholder ='Search'
                onChange={handleChange}
            />
        </div> 
    
    <table className='table'>
      <thead className='table-header'>
        <tr className='columns'>
          
        {columns.map((column) => {
            return <th className='table-columns' key={column.id}> {column.headerName} 
              <div className='btn-container'>
                <button 
                  className='btn-up'
                  onClick={sortByAsc}
                >
                </button>
                <button 
                  className='btn-down'
                  onClick={sortByDesc}
                >
                </button>
              </div>            
            </th>
        })}
        </tr>
      </thead>

      <tbody className='table-body'>
      {tableData
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
        .map((val) => {
          return <tr className='user-info' key= {val.id}>
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