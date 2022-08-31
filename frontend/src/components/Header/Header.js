import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';

function Header() {

const [pathList, setPathList] = useState(false)

const location = useLocation()
const currentLocation = location.pathname

const findLocation = () => {
    if( currentLocation === "/list") {
        setPathList(true)
       }
    else(setPathList(false))
}

useEffect(() => {
  findLocation()
},[])

  return (
    <header>
        <nav className='navbar'>
            <li className='logo-link'>
                <img 
                    className='logo'
                    src={Logo} 
                    alt="logo"
                />
                <h1 className='title'>HRnet</h1>
            </li>           
            {pathList 
            ?
                <Link 
                    className = 'link'
                    to = "/"
                > 
                    <p className='link-text'>
                        Home
                    </p> 
                </Link>
            :                
                <Link 
                    className = 'link'
                    to = "/list"
                > 
                    <p className='link-text'>
                        View Current Employees 
                    </p> 
                </Link>               
            }          
        </nav>
    </header>
  )
}

export default Header