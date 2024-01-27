import React ,{useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TeacherCrausal = () => {
  const teachers=[
    {
      "_id": "657d53d71e5d298efb177a16",
      "name": "Mohit Sir",
      "education": "QA and DILR Mentor ",
      "top_in_cat": "top_in_cat",
      "top_in_clat": "top_in_clat",
      "top_in_cuet": "top_in_cuet",
      "top_in_ipmat": "top_in_ipmat",
      "top_in_nift": "nift",
      "url": "https://res.cloudinary.com/duils7z7r/image/upload/v1704823278/vljeh5cwxyhtywbqqjzo.png",
      "publicid": "vljeh5cwxyhtywbqqjzo",
      "__v": 0,
      "about": "Meet the founder and director of Coachify, with a B.Tech. and MBA. With 8 years in the education industry, this leader has guided 5000+ students so far. Also a talented singer, he brings together education, entrepreneurship, and art, creating success.",
      "alumni": "Alumni - MNIT Jaipur"
    },
    {
      "_id": "6585853641ad34c32875976a",
      "name": "Mulayam Sir",
      "education": "QA Mentor  ",
      "about": "Meet Mulayam Sir—QA mentor and heart-driven teacher, B.Sc. in Mathematics Honours and M.Sc. in Mathematics from IIT Madras. A former Virtusa data scientist, he's a student sensation dedicated to crafting impactful careers. Join his inspiring journey!",
      "top_in_cat": "top_in_cat",
      "top_in_clat": "top_in_clat",
      "top_in_cuet": "top_in_cuet",
      "top_in_ipmat": "top_in_ipmat",
      "url": "https://res.cloudinary.com/duils7z7r/image/upload/v1704823475/kjy8od2mkk8z5xi0gom2.png",
      "publicid": "kjy8od2mkk8z5xi0gom2",
      "__v": 0,
      "alumni": "Alumni - IIT Madras"
    },
    {
      "_id": "6585824041ad34c328759758",
      "name": "Saurabh Sir",
      "education": "DILR Mentor ",
      "top_in_cat": "top_in_cat",
      "top_in_clat": "top_in_clat",
      "top_in_cuet": "top_in_cuet",
      "top_in_ipmat": "top_in_ipmat",
      "url": "https://res.cloudinary.com/duils7z7r/image/upload/v1704823316/p5b1atidv9tbxcrfxgem.png",
      "publicid": "p5b1atidv9tbxcrfxgem",
      "__v": 0,
      "about": "Meet Coachify's Partner and Director, a B.Tech. holder honored by the President of India. Recognized for DILR excellence, he leverages a distinguished background from Maruti Suzuki and TrucksDekho. He seamlessly blends engineering prowess, corporate expertise, and strategic acumen in every venture.",
      "alumni": " Alumni - MNIT Jaipur"
    },
    {
      "_id": "658584a041ad34c328759767",
      "name": "Stuti Ma'am",
      "education": "DILR Mentor ",
      "about": "Stuti Ma'am, a DILR expert mentor, holds a B.Tech. and an MBA in Marketing and Strategy from IIM Rohtak. With a background in sales and marketing across the automotive, EdTech, and pharma-cosmetic industries, she has made significant contributions at Mahindra and Mahindra, Byjus, and Galderma.",
      "top_in_cat": "top_in_cat",
      "top_in_clat": "top_in_clat",
      "top_in_cuet": "",
      "top_in_ipmat": "",
      "url": "https://res.cloudinary.com/duils7z7r/image/upload/v1704823400/pd3su5ujytrp8kiqz158.png",
      "publicid": "pd3su5ujytrp8kiqz158",
      "__v": 0,
      "alumni": "Alumni - IIM Rohtak"
    },
  
  ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      const [t, setT] = useState({});
  const setTeacher=(teacher)=>{
    setT(teacher)
  } 
  return (
    <>
    <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                  <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    <div className="modal-body">
                      <div className="pop-up p-3">
                        <div className="row">
                          <div className=" teacher-img">
                            <img
                              className="rounded teachers-img"
                              src={t?.url}
                              alt="faculties" 
                            />
                          </div>
                          <div className=" teacher-name">
                            <h3>{t.name}</h3>                            
                            <h4>{t.education}</h4>
                            <h4>{t.alumni}</h4>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="div-about" style={{ padding: "18px" }}>
                            <p>{t.about}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <Carousel responsive={responsive} infinite={true} autoPlaySpeed={2000} showDots={false} infiniteLoop={true}>
        {teachers?.map((t, i) => (
                <div key={i} className="mx-2">
                  <div className="faculty-card d-flex align-items-center justify-content-between my-2 px-3 py-2">
                    <div className="d-flex justify-content-between flex-column">
                      <span className="font-fam-bold teachers-name">{t.name}</span>
                      <span className="faculty-title">{t.education}</span>
                      <span className="faculty-title">{t.alumni}</span>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{ width: "100px !important" }}
                        className="btn btn-sm knowmore mt-2 facultyId" onClick={e=>setTeacher(t)}
                      >
                        Know More
                      </button>
                    </div>
                    <div>
                      <img
                        className="rounded"
                        src={t.url}
                        style={{ width:'88px'}}
                        alt="faculties"
                      />
                    </div>
                  </div>
                </div>
              ))}
       
      </Carousel>
    </>
  )
}

export default TeacherCrausal