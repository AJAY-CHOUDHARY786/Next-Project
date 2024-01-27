import React from 'react'
import HomeCourses from './HomeCourses'

const HeroSection = () => {
    const stle={
        width:'100%'
    }
  return (
    <>
     <section>
        <div id="firscountainer">
            <div className="background-slider-top">
            <div className="slider">
                <div className="slide"><img src="/banner.webp" alt style={stle}/></div>
                <div className="slide"><img src="/banner.webp" alt style={stle}/></div>
                <div className="slide"><img src="/banner.webp" alt style={stle} /></div>
                <div className="slide"><img src="/banner.webp" alt  style={stle}/></div>
                <div className="slide"><img src="/banner.webp" alt  style={stle}/></div>
                <div>
                </div>
            </div>
            </div></div>
        </section>
<div className="container" style={{position: 'relative', height: '350px'}}>
  <div className="col-12 top-banner-panel">
    <div className="fcfs-form p-4">
      <div className="col-12 py-0 py-md-2 " style={{position: 'relative'}}>
        <div className="my-md-2 my-3 mx-md-4">
          <div className="d-flex col-12 lh-sm flex-column font-head1" style={{fontWeight: '900'}}>
            <div className="font-fam-bold">Ignite Tomorrow: Your</div>
            <div className="font-fam-bold">Personal Coach Awaits!</div>
            <p className="font-head2 mt-2 font-fam-medium">Unlock Success: Learn from the Best.</p>
            <div className="d-flex col-12 col-md-6  text-md-start  text-center flex-column mt-2 ">
              <form className="col-md-10 col-12 mb-1">
                <div className="input-group">
                  <input type="tel" id="external-tel" className="form-control input-tel-bg" pattern="^[5-9]{1}[0-9]{9}$" placeholder="Enter Mobile Number" autoComplete="off" autoCorrect="off" minLength={4} maxLength={10} onkeydown="return isNumber(event);" />
                  <span className="input-group-text arrow" id="num_even" onclick="goToLogin();"><img src="https://www.pw.live/version14/assets/img/home/arrow.svg" alt="go to Login" /></span>
                </div>
                <div id="validationServerFeedback" className="invalid-feedback text-start" />
              </form>
              <div className="d-md-flex">
                <span className="mt-4">
                  <a href="#" className="btn btn-outline-secondary" type="button">Find us on Google
                    Play Store</a>
                </span>
              </div>
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
<HomeCourses/>

    </>
   
  )
}

export default HeroSection