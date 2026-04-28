import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul className='navbarLinks'>
            <li ><Link to={"/"}>Home</Link></li>
            <li ><Link to={"/HideOrShow"}>Hide Show</Link></li>
             <li ><Link to={"/ShowInput"}>Input Value</Link></li>
        </ul>
    </div>
  )
}

export default Header