import React from 'react'
import Link from "next/link";
import Sidebar from '../pages/Sidebar';
const NIFTNav = () => {
  return (
    <>
    
    <div className="Nav-container">
        <div className="nav-1">
        <nav className='navbar'>
        
        <h1 className="logoCat"> NIFT </h1>
        <Link href="/NIFTcourse" >
              <p > |Course 2024| </p>
            </Link>
        
        </nav>
        </div>
        <div className="Admin-button"> <Link href="/NIFTbutton" >
              <p  style={{margin:"0px"}}> CuAdd Course </p>
            </Link> 
            </div>
      </div>
    
    
    </>
  )
}

export default NIFTNav