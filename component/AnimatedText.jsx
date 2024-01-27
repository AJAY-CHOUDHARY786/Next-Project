import React, { useState, useEffect, useRef } from "react";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const AnimatedText = () => {
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

  // const getTagline=async()=>{
  //   try {
  //     const {data}=await axios.get(/api/getwhytagline);
  //     if(data?.success){
  //         setTagline(data.line);

  //     }
  //     } catch (error) {
  //     console.log(error);
  //     }
  // }

  return (
    <div>
      <div className="NewDoubtContainer">
        <div className="NewDoubtMaincontainer">
          <div className="ContainerOne">
            <div className="text-animate">
              <span className="text-why-fix">DoubtPucho: </span>
              <span ref={textNode} id="type-text"></span>
              <span className="blinking-cursor">|</span>
            </div>
            <button className="DoubtSubbmit">Ask Doubt </button>
          </div>

          <div className="containerTwo">
          <div className="conimagesec1">
              {" "}
              {/* <ImageCarousel images={imagesArray} /> */}
              <img src="https://res.cloudinary.com/duils7z7r/image/upload/v1704017405/fiu40cmexcr8vhgr48x2.jpg" alt="" style={{width: "50%"}} />
            </div>
            <div className="videosec"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
