// import React, {useState, useEffect, useRef } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { TbCaptureFilled } from "react-icons/tb";


// const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));


// const ImageCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     // Automatically transition to the next image every 3 seconds
//     const interval = setInterval(() => {
//       nextImage();
//     }, 1000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="image-carousel">
//       <button onClick={prevImage}>&lt;</button>
//       <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
//       <button onClick={nextImage}>&gt;</button>
//     </div>
//   );
// };
// // Example usage:
// const imagesArray = [
//   "https://res.cloudinary.com/duils7z7r/image/upload/v1704017342/kprs7bclvtdpp2sghtds.jpg",
//   "https://res.cloudinary.com/duils7z7r/image/upload/v1704017405/fiu40cmexcr8vhgr48x2.jpg",
//   "https://res.cloudinary.com/duils7z7r/image/upload/v1704017342/kprs7bclvtdpp2sghtds.jpg",
  
//   // Add more image URLs as needed
// ];
// // ******************************************************************************************************
// const TestimonialsCarousel = ({ testimonials }) => {
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   const openModal = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const closeModal = () => {
//     setSelectedTestimonial(null);
//   };

//   return (
//     <div className="testimonials-carousel">
//       {testimonials.map((testimonial, index) => (
//         <div
//           key={index}
//           className="testimonial-box"
//           onClick={() => openModal(testimonial)}
//         >
//           <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
//           <p>{testimonial.quote}</p>
//         </div>
//       ))}

//       {selectedTestimonial && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <img src={selectedTestimonial.image} alt="Selected Testimonial" />
//             <p>{selectedTestimonial.quote}</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// // *********************************************************
// const Card = ({ iconSrc, heading, paragraph }) => {
//   return (
//     <div className="card">
//       <img src={iconSrc} alt="Icon" className="card-icon" />
//       <h2 className="card-heading">{heading}</h2>
//       <p className="card-paragraph">{paragraph}</p>
//       {/* Add additional styling or components as needed */}
//     </div>
//   );
// };

// const ImageCard = ({ imageUrl, title, content }) => {
//   return (
//     <div className='card1'>
//       <img src={imageUrl} alt={title} className='cardimage' />
//       <div className= 'cardContent'>
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };

// // ******************************************************** carousel***********************************************





// const DoubtPage = () => {
//   const testimonialsData = [
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "This is a fantastic service. I highly recommend it!",
//     },
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "I've never seen such professionalism. Truly impressed!",
//     },
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "Amazing results! I could not be happier with the outcome.",
//     },
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "Amazing results! I could not be happier with the outcome.",
//     },
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "Amazing results! I could not be happier with the outcome.",
//     },
//     {
//       image:
//         "https://coachifylive.com/wp-content/uploads/2023/11/Meda-6-1024x1024.png",
//       quote: "Amazing results! I could not be happier with the outcome.",
//     },
//     // Add more testimonials as needed
//   ];
// // ******************************************Animatedtext
// const textNode = useRef(null);
//   // const [tagline, setTagline] = useState([])
//   const type = async (text) => {
    
//     for (let character of text) {
//       if (textNode.current) {
//       textNode.current.innerText += character;
//       await sleep(100); // Adjust the delay as needed
//       }
//     }
//   };

//   const deleteText = async (text) => {
    
//     for (let character of text) {
//       if (textNode.current) {
//         textNode.current.innerText = textNode.current.innerText.slice(0, textNode.current.innerText.length - 1);
//         await sleep(100); // Adjust the delay as needed
//       }
//     }
//   };
//   useEffect(() =>{    
//     // getTagline()
//     animate();
//   }, [])
  
//   const animate= async () => {
//     await sleep(1000);
//     textNode.current.innerText = "";   
//     // await waitForVal();
 
//     while (true) {       
//       await type("\"Ab Kaho No Doubt!\"");
//       await sleep(1000);
//       await deleteText("\"Ab Kaho No Doubt!\"");
      
//     }      
//   };


//   return (
//     <div>
//       <div className="doubtMainContainer">
//          <div className="imgdiv" style={{textAlign:"center"}}>
//          <img src="https://coachify-app.vercel.app/coachifylogotop.png" alt="" style={{width: "16%"}} />
//          <p>India's no.1 doubt solving platform</p>
//          </div>
//         <div className="doubtMainContainerSec">
         
//           <div className="doubtMainContainerSecOne">
//           <div className='text-animate' >      
//       <span className='text-why-fix'>DoubtPucho: </span>
//       <span ref={textNode} id="type-text"></span>
//       <span className="blinking-cursor">|</span>
     
//     </div>
//     <button className="DoubtASKSubbmit">Ask Doubt </button>
//           </div>

//           <div className="doubtMainContainerSecTwo">
//             <div className="imagesec1">
//               {" "}
//               {/* <ImageCarousel images={imagesArray} /> */}
//               <img src="https://res.cloudinary.com/duils7z7r/image/upload/v1704017405/fiu40cmexcr8vhgr48x2.jpg" alt="" style={{width: "50%"}} />
//             </div>
//             <div className="videosec"></div>
//           </div>
//         </div>

//         <section className="doubtSecOne">
//           <h1> Ask Your Questions </h1>
        
//           <div className="doubtIcon">
//             <span>
//               <TbCaptureFilled />
//             </span>
//           </div>
//           <button className="DoubtSubbmit"> Submit </button>
//         </section>
//         <section className="doubtSecTwo">
//           <h1> Know Your Mentors </h1>
//           <div className="doubtsecCar">
//             <TestimonialsCarousel testimonials={testimonialsData} />
//           </div>
//         </section>
       


//         <section style={{background:"#f9f9f9"}}>
//         <section className="doubtSecThree">
//           <h1>Instant Doubt Solution</h1>
         
//         </section>
//         <div>
      
//       <div className="card-container">
//         <ImageCard
//           imageUrl="https://cdn-icons-png.flaticon.com/512/993/993508.png"
//           title="Quick Resolution"
//           content="Get video solutions within an hour.
//           "
//         />
//         <ImageCard
//           imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvj9iOKbQuei_7DQKzq_DxCpgZETQeQdSug&usqp=CAU"
//           title="Personalized Learning"
//           content="Understand concepts through custom-tailored explanations.
//           "
//         />
//         <ImageCard
//           imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupYKBZZDV5B8K1-fahupSn13GxF-VRL7oZiST1-fd9MtCodXHJ-0fIqWDLrLZhLZtvFs&usqp=CAU"
//           title="Effortless Process"
//           content="Simply snap, submit, and learn!
//           "
//         />
//       </div>
//     </div>


//         </section>
       
        

//         <section  className='lastsec'  >
// <h1>Testimonials</h1>
//         <div className="doubtMainContainerSecc">
//           <div className="texting">
//             <h1>Students Speak</h1>
//             <h5>Your Success Story</h5>
//           </div>

//           <div className="imagesecc">
//               {" "}
//               <ImageCarousel images={imagesArray} />
//             </div>
//         </div>
//         <section>

// <div className="doubtMainContainerSecc">
// <div className="imagesecc">
//       {" "}
//       <ImageCarousel images={imagesArray} />
//     </div>
//   <div className="texting">
//     <h1>Students Speak</h1>
//     <h5>Your Success Story</h5>
//   </div>


// </div>

// </section>
//         </section>
       


//         <section>

//           <div className="lastcontainer">
//             <div className="lastconthead">
//               <h2 style={ {color:"white"}}> Ready to get started?</h2>
              
//             </div>
//             <div className="lastconthead">
            
//               <button> Sign up </button>
//               <button> Contact us </button>
//             </div>

//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default DoubtPage;
