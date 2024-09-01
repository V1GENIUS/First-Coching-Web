import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav >
            <ul className='navbar' style={{listStyleType :'none'}}>
                <li className='nav_item'>
                    <Link to="Homepage"> Home </Link>
                </li>
                <li className='nav_item'>
                    <Link to="AboutUs"> AboutUs</Link>
                </li>
                <li className='nav_item'>
                    <Link to="ContactUs"> ContactUs</Link>
                </li>
                <li className='nav_item'>
                    <Link to="Signup"> Signup</Link>
                </li>
                <li className='nav_item'>
                    <Link to="Term_Condition"> Term_Condition</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar;