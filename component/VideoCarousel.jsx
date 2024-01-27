import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HoverVideoPlayer from 'react-hover-video-player';


const VideoCarousel = () => {
const videoTesti= [
  {
    "_id": "65913cf38f0e286dd7188d5e",
    "name": "testi11",
    "course": "clat",
    "type": "video",
    "videoUrl": "https://res.cloudinary.com/duils7z7r/video/upload/v1704017140/ogjf7pmswfwwu5jg0t3q.mp4",
    "videoPublicId": "ogjf7pmswfwwu5jg0t3q",
    "__v": 0
  },
    {
      "_id": "65913d388f0e286dd7188d60",
      "name": "Mohit Jhori ",
      "course": "cat",
      "type": "video",
      "videoUrl": "https://res.cloudinary.com/duils7z7r/video/upload/v1704017210/bizxt1xvvvdvp2wajmme.mp4",
      "videoPublicId": "bizxt1xvvvdvp2wajmme",
      "__v": 0
    }
    
 
  ]
  
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
  
    return (
      <Carousel responsive={responsive} infinite autoPlaySpeed={2000} showDots={false} infiniteLoop>
        {videoTesti?.map((video, index) => (
          <div key={index} className="card__content video-card">
             <HoverVideoPlayer videoSrc={video.videoUrl} muted={false} />
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default VideoCarousel;