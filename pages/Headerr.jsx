import { useState } from "react";
import Link from "next/link";
import styles from "../style/Header.module.css";
import { FaLessThan } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [isListVisible, setListVisible] = useState(false);
  
  const [subToggle, setSubToggle] = useState(true)
  const handleListClick = () => {
    setListVisible(!isListVisible);
    
  };

  const handleTransitionClick = () => {
    setSubToggle(!subToggle);   
 
  };

  return (
    <header className={styles.header}>
      <div className={styles.hamburgerIcon}>
        <div className={styles.hamburgerIconMenu}>
          <div className="icon">
            {" "}
            <img
              src="https://www.pw.live//version14/assets/img/hamburger-icon.svg"
              alt=""
              onClick={handleListClick}
              className={isListVisible ? styles.imageSubList : ""}
            />
          </div>
          {isListVisible && (
            <div className={styles.imageList}>
              <div className={styles.imageSubList}>
                <div class={styles.mainmenucloseiconright}>
                  <div className="leftImg">
                    <img
                      src="https://www.pw.live//version14/assets/img/user-mobile.svg"
                      alt=""
                    />
                    <span class="caption-3 mob-call-us ms-2">
                      <a href="tel:8306056876">Call Us +918306056876</a>
                    </span>
                  </div>
                  <div className={styles.rightImg}>
                  <span style={{  float: "right" }}
                              onClick={handleListClick}
                              className={isListVisible ? styles.clickedImage : ""}><IoClose /></span>
                            
                  </div>
                </div>
                <ul>
                  <li onClick={handleTransitionClick}>
                    All Course
                    <span style={{ float: "right" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrJ00vchXkYeiqVaSIJtc6fHsuezlp_P-fKunQWRGjw&s"
                        alt=""
                        style={{ width: "20px" }}
                      />
                    </span>
                    <div
                      className={subToggle?styles.moremenu:styles.moremenuLeft0}
                    >
                      <div className={styles.moremenu1}>
                        <div class={styles.mainmenucloseiconright}>
                          <div className="leftImg">
                            <span><FaLessThan /></span>
                            <span class={styles.mobcallus}>
                              All Course
                            </span>
                          </div>
                          <div className={styles.rightImg}>
                            <span style={{  float: "right" }}
                              onClick={handleListClick}
                              className={isListVisible ? styles.clickedImage : ""}><IoClose /></span>
                            
                          </div>
                        </div>
                        <ul>
                          <li>CAT</li>
                          <li>CLAT</li>
                          <li>IPMAT</li>
                          <li>CUET</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>Center Tour</li>
                  <li>Ask Doubts</li>
                </ul>
              </div>
            </div>
          )}
          <div className="logoimg">
            {" "}
            <Link href="/">
              <img
                className={styles.logo}
                src="https://coachify-app.vercel.app/Coachify%20purple%20logo.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.menuContainer}>
        <nav className={styles.navMenu}>
          <ul className={styles.headersList}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <img
                  className={styles.logo}
                  src="https://coachify-app.vercel.app/Coachify%20purple%20logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <select id={styles.courses} name="All courses"> All courses
              <option value="course1">All courses</option>
              <option value="course2">CAT</option>
              <option value="course3">CLAT</option>
              <option value="course3">IPMAT</option>
              <option value="course3">CUET</option>
            </select>
            <li className={styles.lists}>
              <Link style={{color:"#533190"}} href="/center-tour">Center Tour</Link>
            </li>
            <li className={styles.lists}>
              <Link style={{color:"#533190"}} href="/ask-doubt">Ask Doubt</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.authContainer}>
        <button className={styles.authButton}>Login/Register</button>
      </div>
    </header>
  );
};

export default Header;