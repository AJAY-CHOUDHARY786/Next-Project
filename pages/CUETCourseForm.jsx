import React from 'react'
import SidePanel from "../component/SidePanel";
import Sidebar from './Sidebar';
const CUETCourseForm = () => {
  return (
    <>
    
    <div className="Catapiconatainer">

<Sidebar/>

 
<div classname="container-0" style={{display:"flex" , flexWrap:"wrap" , width:"73%" , marginTop: "38px"}}>
 <div className="form-container-1">
   <form className="form-one">
     <label  htmlFor="name">Name:</label>
     <input type="text" id="name" name="name" required />
     <label htmlFor="details">Details:</label>
     <textarea
       id="details"
       name="details"
       rows={4}
       required
       defaultValue={""}
     />
     <label htmlFor="image">Image URL:</label>
     <input
       type="url"
       id="image"
       name="image"
       placeholder="https://example.com/image.jpg"
       required
     />
     <label htmlFor="button-file">
       {" "}
       <button className="button-file" type="submit">
         Choose File
       </button>
     </label>

     <label htmlFor="slug">Slug:</label>
     <input type="text" id="slug" name="slug" required />
   </form>
 </div>


 <div className="form-container-2">
 <button id="saveBtn">Save</button>
<button id="deleteBtn" >Delete</button>
<button id="redirectBtn">Redirect</button>
 </div>
</div>
</div>
    
    
    </>
  )
}

export default CUETCourseForm