import React from 'react'
import Link from "next/link";
const IPMATnav = () => {
  return (
    <>
     <div className="Nav-container">
        <div className="nav-1">
        <nav className='navbar'>
        
        <h1 className="logoCat"> IPMAT </h1>
        <Link href="/IPMATCourseForm" >
              <p > |Course 2024| </p>
            </Link>
        
        </nav>
        </div>
        <div className="Admin-button"> <Link href="/IPMATButtonform" >
              <p  style={{margin:"0px"}}> ClatAdd Course </p>
            </Link> 
            </div>
      </div>
    </>
  )
}

export default IPMATnav