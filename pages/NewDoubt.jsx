import React, { useState, useEffect, useRef } from "react";
import { CiCamera } from "react-icons/ci";
import DoubtFooter from "../component/DoubtFooter";
import TeacherCrausal from "../component/TeacherCrausal";
import VideoCarousel from "../component/VideoCarousel";
import TestimoniolCarousel from "../component/TestimoniolCarousel";
// *******************************************Animated-text*******************************
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

// ******************************************************atext******
const NewDoubt = () => {
  const textNode = useRef(null);
  // const [tagline, setTagline] = useState([])
  const type = async (text) => {
    for (let character of text) {
      if (textNode.current) {
        textNode.current.innerText += character;
        await sleep(100); // Adjust the delay as needed
      }
    }
  };

  const deleteText = async (text) => {
    for (let character of text) {
      if (textNode.current) {
        textNode.current.innerText = textNode.current.innerText.slice(
          0,
          textNode.current.innerText.length - 1
        );
        await sleep(100); // Adjust the delay as needed
      }
    }
  };
  useEffect(() => {
    // getTagline()
    animate();
  }, []);

  const animate = async () => {
    await sleep(1000);
    textNode.current.innerText = "";
    // await waitForVal();

    while (true) {
      await type('"Ab Kaho No Doubt!"');
      await sleep(1000);
      await deleteText('"Ab Kaho No Doubt!"');
    }
  };

  // ******************************************Animate**************************

  // *************************video-car*****

  return (
    <div>
      <div className="NewDoubtContainer">
        <div className="NewCont">
          <div className="NewDoubtMaincontainer">
            <div className="NewContainerOne">
              <div className="Newtext-animate">
                <span className="Newtext-why-fix">
                  DoubtPucho: <br />
                </span>
                <span ref={textNode} id="type-text"></span>
                <span className="Newblinking-cursor">|</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque repellendus dolore q
                </p>
              </div>
              <button className="NewDoubtSubbmit">Ask Doubt </button>
            </div>

            <div className="NewcontainerTwo">
              <div className="Newconimagesec1">
                {" "}
                {/* <ImageCarousel images={imagesArray} /> */}
                <video controls width="95%" style={{ borderRadius: "24px" }}>
                  <source src="https://www.youtube.com/" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="Newvideosec"></div>
            </div>
          </div>
          <div className="NewDoubtMaincontainers">
            <h1> Ask Your Questions</h1>
            <div className="capture">
              <div className="capicon">
                <span>
                  <CiCamera />
                </span>{" "}
                <br />
                <span className="Capspan">Capture Your Doubt </span>
              </div>
              <button className="CapButton">Submit</button>
            </div>
          </div>
        </div>

        <section>
          <div className="ProcessContainer">
            <h1> Process of Coachify </h1>
            
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                
                <div className="ProcessPara1">
                <h3>Step 1</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies vitae
                    congue sed pellentesque id ultrices. Vitae venenatis nulla
                    lacinia at massa.
                  </p>
                 
             
                </div>
                <div className="ProcessSubmain">
             
             <div className="Processpara">
               <p>1.</p>
             </div>
           
         </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="ProcessSubContainer">
             
            </div>
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                <div className="ProcessPara1">
                <h3>Step 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies vitae
                    congue sed pellentesque id ultrices. Vitae venenatis nulla
                    lacinia at massa.
                  </p>
                </div>
                <div className="ProcessSubmain">
               
               <div className="Processpara">
                 <p>2.</p>
               </div>
             </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="ProcessSubContainer">
             
            </div>
            <div className="ProcessSubContainer">
              <div className="ProcessSubmain1">
                <div className="ProcessPara1">
                <h3>Step 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Ultricies vitae
                    congue sed pellentesque id ultrices. Vitae venenatis nulla
                    lacinia at massa.
                  </p>
                </div>
                <div className="ProcessSubmain">
               
               <div className="Processpara">
                 <p>3.</p>
               </div>
             </div>
                <div className="Processparas">
                  <img
                    src="https://clipart-library.com/img/808889.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="DoubtNextsec">
            <div className="Doubtsubsec">
              <h1>Your Doubt Solving Expert</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita rem at nulla suscipit. Sed assumenda nulla dolorem
                facilis! Aut, perferendis.
              </p>
            </div>
            {/* ***********************car***************** */}
            <div className="DubtsecTeacher">
              <TeacherCrausal />
            </div>
          </div>
        </section>
        {/* <section className="NewmainiconContainer">
          <div className="Newcontainer">
         
            <h1>Need help with specific Subject?</h1>

          
            <p>Choose your specific subject to solve:</p>

          
            <div className="NewiconContainer">
             
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CAT Icon" />
                  <p>CAT</p>
                </a>
             

             
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CLAT Icon" />
                  <p>CLAT</p>
                </a>
              

            
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="IPMAT Icon" />
                  <p>IPMAT</p>
                </a>
              

           
                <a href="#" className="NewiconBox">
                  <img src="https://www.bartleby.com/static/subjectsV2/businessV2.svg" alt="CUET Icon" />
                  <p>CUET</p>
                </a>
           
            </div>
          </div>
        </section> */}
        <section>
          <div className="cardboxContainer">
            <div className="cardCont">
              <h1>Instant Doubt Solution! Your Gatway to Clarity </h1>
            </div>
            <div className="cardcont2">
              <div className="box1">
                <span>
                  <img
                    src="/WhatsApp Image 2024-01-22 at 12.58.39 PM.jpeg"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "120px",
                      marginBottom: "24px",
                    }}
                  />
                </span>
                <h5>Quick Resolution</h5>
                <p>Get your video solution within an hour </p>
              </div>
              <div className="box1">
                <span>
                  <img
                    src="/WhatsApp Image 2024-01-22 at 1.01.23 PM.jpeg"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "120px",
                      marginBottom: "24px",
                    }}
                  />
                </span>
                <h5>Quick Resolution</h5>
                <p>Get your video solution within an hour </p>
              </div>
              <div className="box1">
                <span>
                  <img
                    src="/WhatsApp Image 2024-01-22 at 12.59.47 PM.jpeg"
                    alt=""
                    style={{
                      width: "60%",
                      borderRadius: "120px",
                      marginBottom: "24px",
                    }}
                  />
                </span>
                <h5>Quick Resolution</h5>
                <p>Get your video solution within an hour </p>
              </div>
            </div>
          </div>
        </section>

        <section className="WhatMain">
          <div className="Whatcontainer">
            {/* Heading */}
            <h1>Whatever the homework problem, We have a solution:</h1>

            {/* Main content container */}
            <div className="WhatcontentContainer">
              {/* Left section with image */}
              <div className="WhatleftSection">
                <img src="https://www.bartleby.com/static/homepage-v4/learn-product-new.webp" alt="Your Image Alt Text"  />
              </div>

              {/* Right section with subheading, paragraph, and button */}
              <div className="WhatrightSection">
                <h2>Subheading</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultricies vitae congue
                  sed pellentesque id ultrices. Vitae venenatis nulla lacinia at
                  massa. Lobortis viverra est adipiscing dolor pharetra
                  vulputate elementum. Non volutpat aenean nec ipsum.
                </p>
                <button>Explore Coachify</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="videoTestimoniols">
            <div className="vidhead">
              <h1>
                What Students Says to
                <span style={{ color: "#55328F" }}> Coachify</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Integer eget proin et
                nisi tellus. At sed iaculis orci felis ullamcorper dolor id
                auctor nullam. Placerat nisl commodo ris.
              </p>
            </div>
            <div className="videosubTest">
              <div className="vid1">
                {" "}
                <p>Success Story</p>
                <h1>
                  {" "}
                  <span style={{ color: "#55328F" }}>Love</span> and
                  <span style={{ color: "#55328F" }}>
                    {" "}
                    Share experience
                  </span>{" "}
                  with us
                </h1>
              </div>

              <div className="vid2">
                {" "}
                <VideoCarousel />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="testimoniols">
          <h1>Testimoniols</h1>
            <TestimoniolCarousel/>
          </div>
        </section>

        <section>
          <div className="LastContainer">
            <div className="LastSubcont">
              <div className="last1">
                <h3>Ready to get started with coachify?</h3>
              </div>
              <div className="last2">
                <button style={{ color: "#55328F", backgroundColor: "white" }}>
                  <span >
                    Lets Get Started
                  </span>
                </button>
                <button   style={{
                      color: "White",
                      backgroundColor: "#55328F",
                      border: "1px solid white",
                    }}>
                  <span
                  
                  >
                    Contact Us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DoubtFooter />
    </div>
  );
};

export default NewDoubt;
