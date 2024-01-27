// Sidebar.js
import { useState } from 'react';
import Link from "next/link";
const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div>
      <div
        style={{
          width: isSidebarVisible ? '386px' : '0',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: -76 ,
          backgroundColor: '#343a40',
          overflowX: 'hidden',
          transition: '0.5s',
          padding: '16px 0px 0px 76px',
        }}
      >
       
        <div className="admin-container" style={{width: "100%"}}>
        <div className="Coachify-head" >
            {" "}
           
            <Link href="/AdminPanel" className="Link-herf" style={{width:"86%"}}>
            <img
                  src="Coachify purple logo.svg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
            </Link>
          </div>
          <hr />
          <div className="Coachify-head" >
            {" "}
            <span className="Span-logo">
              <li className="logo">
                {" "}
                <img
                  src="Coachify purple logo.svg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />{" "}
              </li>{" "}
            </span>{" "}
            <Link href="/AdminPanel" className="Link-herf" style={{width:"86%"}}>
              <p className="Adminpar">Dashboard</p>
            </Link>
          </div>
          <hr />
          <div className="C">
            {" "}
            <ul className="Link-her">
            <li >
          <Link href="/CatApi" className="Link-herf">
              <p className="Adminpar">CAT</p>
            </Link>
          </li>
          
         
            </ul>
            <hr />
            <ul className="Link-her">
            <li >
          <Link href="/CLAT" className="Link-herf">
              <p className="Adminpar">CLAT</p>
            </Link>
          </li>
          
         
            </ul>
            <hr />
            <ul className="Link-her">
            <li >
          <Link href="/IPMAT" className="Link-herf">
              <p className="Adminpar">IPMAT</p>
            </Link>
          </li>
          
         
            </ul>
            <hr />
            <ul className="Link-her">
            <li >
          <Link href="/CUET" className="Link-herf">
              <p className="Adminpar">CUET</p>
            </Link>
          </li>
          
         
            </ul>
            <hr />
            <ul className="Link-her">
            <li >
          <Link href="/NIFT" className="Link-herf">
              <p className="Adminpar">NIFT</p>
            </Link>
          </li>
          
         
            </ul>
         
            
          </div>
          <hr />
        </div>
      </div>

      <div  className = "Sidebarbutton" style={{    marginLeft: isSidebarVisible ? '320px' : '0', transition: '0.5s' }}>
        <button  style={{width:"40px" , marginTop: "38px" }} onClick={toggleSidebar}>&#9776; </button>
       
      </div>
    </div>
  );
};

export default Sidebar;
