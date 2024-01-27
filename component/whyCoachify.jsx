import React from 'react'
import SocialLink from './Lead'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const WhyCoachify = () => {
  return (
    <>
    <section className="learn-bg ">
  <div className="container-fluid">
    <div className="row pt-md-5">
      <div className="container text-center ">
        <div className="learn-text font-fam-bold">We don't just teach <span className="teacher"> We
            Transform</span></div>
        <div className="learn-text-sm font-fam-medium pt-3">Learn, Leap and Lead with our expert mentors
        </div>
      </div>
      <div className="d-flex justify-content-center pt-3 pt-md-5">
        <div className="col-12 col-md-12 text-center">
          <div id="carouselVideos" className="carousel" data-bs-ride="carousel">
            <div className="carousel-inner mb-1">
              <div className="carousel-item active">
                <img className="img-fluid img-slider-box" alt="coachify" src="https://www.pw.live/version14/assets/img/alakh-sir-web-launch.png" />
              </div>
              <div className="carousel-item">
                <img className="img-fluid img-slider-box" alt="coachify" src="https://www.pw.live/version14/assets/img/alakh-sir-web-launch.png" />
              </div>
              <div className="carousel-item">
                <img className="img-fluid img-slider-box" alt="coachify" src="https://www.pw.live/version14/assets/img/alakh-sir-web-launch.png" />
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselVideos" data-bs-slide="prev">
                <span aria-hidden="true"><img className="img-fluid" alt="prev" src="https://www.pw.live/version14/assets/img/arrow-left.png" /></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselVideos" data-bs-slide="next">
                <span aria-hidden="true"><img className="img-fluid" alt="next" src="https://www.pw.live/version14/assets/img/arrow-right.png" /></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="container text-center pt-5">
        <h2 className="learn-text font-fam-bold">Why <span className="why-phy">Coachify?</span></h2>
        <div className="learn-text-sm font-fam-medium mt-4">Success Simplified, All Here!</div>
      </div>
    </div>
    <div className="row">
      <div className="container py-5">
        <div className="col-12 col-md-12 why-phy-box d-flex align-items-center text-center p-3 cflx">
          <div className="col-12 col-md-3 d-flex justify-content-center"><img className="img-fluid" alt="i11" src="https://www.pw.live/version14/assets/img/group-20356.svg" /></div>
          <div className="col-12 col-md-9">
            <div className="d-flex flex-column">
              <div className="why-inner-head font-fam-bold px-4">Maximum Personal Attention</div>
              <div className="why-inner-text font-fam-regular px-4">
                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                  Popover on bottom
                </button>
                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                  Popover on bottom
                </button>
                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                  Popover on bottom
                </button>
                <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
                  Popover on bottom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 text-center">
          <span className="d-md-block d-none"><img className="img-fluid" alt="img18" src="/index-page/line left to right.svg" /></span>
          <span className="d-md-none"><img className="img-fluid" alt="img18" src="/index-page/line left to right.svg" /></span>
        </div>
        <div className="col-12 col-md-12 why-phy-box-inn d-flex align-items-center p-3 cflx">
          <div className="col-12 col-md-3 d-flex justify-content-center d-md-none"><img className="img-fluid" alt="11" src="https://www.pw.live/version14/assets/img/group-20360.svg" width={220} height={220} /></div>
          <div className="col-12 col-md-9">
            <div className="d-flex flex-column">
              <div className="why-inner-head font-fam-bold px-4">Customized Learning Paths</div>
              <div className="why-inner-text font-fam-regular px-4">We customize our teaching approach
                to focus on each student's strengths and weaknesses. This means personalized
                study plans for a more effective learning experience.</div>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center d-md-block d-none"><img className="img-fluid" alt="img11" src="https://www.pw.live/version14/assets/img/group-20360.svg" width={220} height={220} /></div>
        </div>
        <div className="col-12 col-md-12 text-center">
          <span className="d-md-block d-none"><img className="img-fluid" alt="img18" src="/index-page/line right to left.svg" /></span>
          <span className="d-md-none"><img className="img-fluid" alt="img18" src="/index-page/line right to left.svg" /></span>
        </div>
        <div className="col-12 col-md-12 why-phy-box-inn d-flex align-items-center p-3 cflx">
          <div className="col-12 col-md-3 d-flex justify-content-center"><img className="img-fluid" alt="img11" src="https://www.pw.live/version14/assets/img/group-20358.svg" /></div>
          <div className="col-12 col-md-9">
            <div className="d-flex flex-column">
              <div className="why-inner-head font-fam-bold px-4">One-on-One Doubts Clarification</div>
              <div className="why-inner-text font-fam-regular px-4">Our Students can freely ask
                questions and seek clarification on doubts in real time. No prior booking of
                time slots is required. This one-on-one interaction helps in a better
                understanding of concepts, leading to improved performance.</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 text-center">
          <span className="d-md-block d-none"><img className="img-fluid" alt="img18" src="/index-page/line left to right.svg" /></span>
          <span className="d-md-none"><img className="img-fluid" alt="img18" src="/index-page/line left to right.svg" /></span>
        </div>
        <div className="col-12 col-md-12 why-phy-box-last d-flex align-items-center p-3 cflx">
          <div className="col-12 col-md-3 d-flex justify-content-center d-md-none"><img className="img-fluid" alt="img11" src="https://www.pw.live/version14/assets/img/group-20359.svg" /></div>
          <div className="col-12 col-md-9">
            <div className="d-flex flex-column">
              <div className="why-inner-head font-fam-bold px-4">Motivation and Guidance</div>
              <div className="why-inner-text font-fam-regular px-4">A mentor can understand the unique
                challenges faced by each student and offer motivational support to keep them on
                track.</div>
            </div>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center"><img className="img-fluid d-md-block d-none" alt="img11" src="https://www.pw.live/version14/assets/img/group-20359.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
<Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} infinite={true} autoPlaySpeed={1000} showDots={true} infiniteLoop={true}>
  <div><img className='w-100' src="https://www.pw.live/files/repository001/website-banners/1695704271-result-neet-banner-web.jpg" alt="" /></div>
  <div><img className='w-100' src="https://www.pw.live/files/repository001/website-banners/1695704271-result-neet-banner-web.jpg" alt="" /></div>
  <div><img className='w-100' src="https://www.pw.live/files/repository001/website-banners/1695704271-result-neet-banner-web.jpg" alt="" /></div>
  <div><img className='w-100' src="https://www.pw.live/files/repository001/website-banners/1695704271-result-neet-banner-web.jpg" alt="" /></div>
</Carousel>
  
</section>
{/* ------------------------------shadow section---------------------------- */}

<div className="container">
  <div className="col-12 ">
    <div className="fcfs-form p-4">
      <div className="col-12 py-0 py-md-2 " style={{position: 'relative'}}>
        <div className="my-md-2 my-3 mx-md-4">
          <div className="d-flex col-12 lh-sm flex-column font-head1" style={{fontWeight: '800'}}>
            <h2 className="font-fam-bold">Get access to our</h2>
            <h2 className="font-fam-bold">Free Batches Now!</h2>
            <p className="font-head2 mt-2 font-fam-medium">Unlock Success: Learn from the Best.</p>
            <div className="d-flex col-12 col-md-6  text-md-start  text-center flex-column mt-2 ">
              <form className="col-md-10 col-12 mb-1">
                <div className="input-group">
                  <input type="tel" id="external-tel" className="form-control input-tel-bg" pattern="^[5-9]{1}[0-9]{9}$" placeholder="Enter Mobile Number" autoComplete="off" autoCorrect="off" minLength={4} maxLength={10} onkeydown="return isNumber(event);" />
                  <span className="input-group-text arrow" id="num_even" onclick="goToLogin();"><img src="https://www.pw.live/version14/assets/img/home/arrow.svg" alt="go to Login" /></span>
                </div>
                <div id="validationServerFeedback" className="invalid-feedback text-start" />
              </form>
              
            </div>
          </div>
          <div className="d-lg-block d-none d-md-none" style={{position: 'absolute', right: 0, bottom: 0}}>
            <div>
              <img className="pw_banner_right_star" src="https://www.pw.live/version14/assets/img/home/home_top_img2.png" alt="coachify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<SocialLink/>

  {/* happy student counting start */}
  <section className="section-work-data mt-4">
    <div className=" text-center">
      <h1 className="platform-edu font-fam-bold d-none d-md-block">India's Trusted Education Space</h1>
      <h1 className="platform-edu font-fam-bold d-block d-md-none">India's Trusted<br />Education Space</h1>
      <h4 className="paltform-journey font-fam-bold">Experience the Excellence</h4>
    </div>
    <div className="d-flex col-md-12 col-xl-12 col-sm-12 p-2">      
        <div className="col-md-3 col-xl-3 col-sm-10 ">
          <div className="mt-4">
            <h2  className="counter-numbers number platform-number font-fam-bold">40+
            </h2>
            <div className="platform-desc font-fam-medium">Live Sessions</div>
            <p />
          </div>
        </div>
        <div className=" col-md-3 col-xl-3 col-sm-12 ">
          <div className="mt-4">
            <h2  className="counter-numbers number platform-number font-fam-bold">50+
            </h2>
            <div className="platform-desc font-fam-medium">Mock Tests</div>
            <div className="section-work-data-mock-tests">
              <p>(with National Percentile Analysis)</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xl-3 col-sm-12">
          <div className="mt-4">
            <h2  className="counter-numbers number platform-number font-fam-bold">450+
            </h2>
            <div className="platform-desc font-fam-medium">Recorded Sessions</div>
          </div>
        </div>
        <div className="col-md-3 col-xl-3 col-sm-12">
          <div className="mt-4">
            <h2  className="counter-numbers number platform-number font-fam-bold">600+
            </h2>
            <div className="platform-desc font-fam-medium">Practice Questions</div>
          </div>
        </div>

    </div>
  </section>

  {/* happy student counting end */}
  <section style={{height: 20}} />
  {/* testimonilas start */}
  <section>
    <div className="testi-slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" defaultChecked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      <div className="testimonials bg-black text-white">
        <label className="item" htmlFor="t-1">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p className='text-white'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown
            aliqua, retro synth master cleanse. "</p>
          <h2 className='text-white'>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-2">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p className='text-white'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown
            aliqua, retro synth master cleanse. "</p>
          <h2 className='text-white'>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-3">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p className='text-white'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown
            aliqua, retro synth master cleanse. "</p>
          <h2 className='text-white'>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-4">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p className='text-white'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown
            aliqua, retro synth master cleanse. "</p>
          <h2 className='text-white'>- Princy, Web Developer</h2>
        </label>
        <label className="item" htmlFor="t-5">
          <img src="https://dummyimage.com/150" alt="picture" />
          <p className='text-white'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown
            aliqua, retro synth master cleanse. "</p>
          <h2 className='text-white'>- Princy, Web Developer</h2>
        </label>
      </div>
      <div className="dots">
        <label htmlFor="t-1" />
        <label htmlFor="t-2" />
        <label htmlFor="t-3" />
        <label htmlFor="t-4" />
        <label htmlFor="t-5" />
      </div>
    </div>
  </section>
  {/* testimonilas end */}
  {/* student  result img start */}
<section>
  <div id="student-result-img" className='my-4'>
    <div >
      <img src="/courses-pages/Frame 160.svg" alt="student-result-img" className='w-100%' />
    </div>
  </div>
</section>
{/* student  result img end */}

</>
  )
}

export default WhyCoachify