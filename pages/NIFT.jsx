import React from 'react'
import Link from "next/link";
import SidePanel from '../component/SidePanel';
import NIFTNav from '../component/NIFTNav';
import Sidebar from './Sidebar';
const NIFT = () => {
  return (
    <>
     <div className="Catapiconatainer">
      <Sidebar/>
      


      <div className="tabcont" style={{width:"100%"}}>
      <NIFTNav/>
      <table className='Tablecontainer' style={{width:"99%"}}>
       <tbody>
        
          
         
        <tr>
            <td>
            <Link href="/NIFTbatch">
              <p className="Adminpara">NIFTBatch</p>
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

export default NIFT