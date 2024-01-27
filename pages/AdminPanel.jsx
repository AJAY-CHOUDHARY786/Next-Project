import React from "react";


import Sidebar from "./Sidebar";
const AdminPanel = () => {
  return (
    <div>
      <div className="Admincontainer">
       <Sidebar/>
        <div className="admincontainer-1">
         
          <div className="admincontainer-2">
            
              <div className="Admin-nav">
                {" "}
                <h1>Welcome to dashboard</h1>
                
              </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
