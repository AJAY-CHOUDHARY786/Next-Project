import React from 'react'
import Link from "next/link";

const ClatNav = () => {
  return (
    <>
  
    <div className="Nav-container">
        <div className="nav-1">
        <nav className='navbar'>
        
        <h1 className="logoCat"> CLAT </h1>
        <Link href="/ClatBatchForm" >
              <p > |Course 2024| </p>
            </Link>
        
        </nav>
        </div>
        <div className="Admin-button"> <Link href="/ClatButtonform" >
              <p  style={{margin:"0px"}}> ClatAdd Course </p>
            </Link> 
            </div>
      </div>
    </>
  )
}

export default ClatNav