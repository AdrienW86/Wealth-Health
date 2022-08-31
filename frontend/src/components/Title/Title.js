import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './title.css';

export default function Title() {

    const [ homeTitle, setHomeTitle ] = useState(false)
    const location = useLocation()
    const currentLocation = location.pathname

    const displayTitle = () => {
        if( currentLocation === "/list") {
            setHomeTitle(true)
        }
        else(setHomeTitle(false))
    }

useEffect(() => {
  displayTitle()
},[])

  return (
    <>{homeTitle
        ?
          <h1>Current Employees</h1>
        :           
          <h1>Create Employee</h1>
    }</>
  )
}
