import React from 'react'
import Link from "next/link";
import SidePanel from '../component/SidePanel';
import IPMATnav from '../component/IPMATnav';
import Sidebar from './Sidebar';
const IPMAT = () => {
  return (
    <>
    <div className="Catapiconatainer">
      <Sidebar/>
      


      <div className="tabcont" style={{width:"100%"}}>
      <IPMATnav/>
      <table className='Tablecontainer' style={{width:"99%"}}>
       <tbody>
        
          
         
        <tr>
            <td>
            <Link href="/IPMATBatchForm">
              <p className="Adminpara">IPMATBatch</p>
            </Link>
            </td>
        </tr>
        <tr>
            <td>
            <Link href="/IPMATBatchForm">
              <p className="Adminpara">IPMATBatch</p>
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

export default IPMAT