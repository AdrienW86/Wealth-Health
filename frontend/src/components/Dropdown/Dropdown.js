import React from 'react';
import { states } from '../../data/states';

function Dropdown() {

  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <>
    <label htmlFor="state">State</label>
                   
    <select onChange={handleChange}
         name ="state" id="state">
         {states.map((state, index) => {
            return <option key={index}> {state.name}</option>
         })}   
    </select>
    </>
  )
}

export default Dropdown