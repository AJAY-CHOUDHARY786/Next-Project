import React from 'react'
import Link from "next/link";
import SidePanel from '../component/SidePanel';
import ClatNav from '../component/ClatNav';
import Sidebar from './Sidebar';
const CLAT = () => {
  return (
    <>
    <div className="Catapiconatainer">
      <Sidebar/>
      


      <div className="tabcont" style={{width:"100%"}}>
      <ClatNav/>
      <table className='Tablecontainer' style={{width:"99%"}}>
       <tbody>
        
          
         
        <tr>
            <td>
            <Link href="/Clatform">
              <p className="Adminpara">ClatBatch</p>
            </Link>
            </td>
        </tr>
     
        
       </tbody>

      </table>

      </div>

      </div>
      
    
    
    
    
    </>
  )
}

export default CLAT