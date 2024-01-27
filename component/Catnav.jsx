import React from 'react'
import Link from "next/link";
import Sidebar from '../pages/Sidebar';
const Catnav = () => {
  return (
    <div>
     
      <div className="Nav-container">
        <div className="nav-1">
        <nav className='navbar'>
        
        <h1 className="logoCat"> CAT </h1>
        <Link href="/BatchForm" >
              <p > |Course 2024| </p>
            </Link>
            <Link href="/BatchForm" >
              <p > |Course 2024| </p>
            </Link>
        
        </nav>
        </div>
        <div className="Admin-button"> <Link href="/Buttonform" >
              <p  style={{margin:"0px"}}> Add Course </p>
            </Link> 
            </div>
      </div>
    </div>
  )
}

export default Catnav 
