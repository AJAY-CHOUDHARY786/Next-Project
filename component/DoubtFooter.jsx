import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const DoubtFooter = () => {
  return (
    <div>
      <div className="FooterContainer">
        <div className="Footersubcont">
          <div className="Footersubone">
            <img
              style={{ width: "80%" }}
              src="https://coachify-app.vercel.app/coachifylogo.png"
              alt=""
            />
          </div>
          <div className="Footersubone">
            <h5>Quick Links</h5>
            <ul>
              <li>Ask Doubt</li>
              <li>About us</li>
              <li>Resourse</li>
              <li>Career</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="Footersubone">
            <h5>Reach us</h5>
            <ul>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <FaWhatsapp />
                </span>
                11235555 (WhatsApp only)
              </li>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <IoMailOpenOutline />
                </span>
                About us
              </li>
              <li>
                {" "}
                <span style={{ margin: "0px 10px 0px -26px" }}>
                  <LuMapPin />
                </span>
                Plot No 30, Sunsai Building, Ground Floor, Financial District,
                Nanakramguda, Serilingampalli, Hyderabad, Rangareddy - 500032
              </li>
            </ul>
          </div>
        </div>
        <div className="Footersubcont">
          <div className="Footericon">
            <ul className="FootericonList">
              <li>
                {" "}
                <img
                  src="/1384060.png
          "
                  alt=""
                  style={{ width: "48%", }}
                />{" "}
              </li>
              <li>
                <img
                  src="/94409a775c02d7658dd6e7ba88429b63-removebg-preview.png
          "
                  alt=""
                  style={{ width: "48%" }}
                />{" "}
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png
          "
                  alt=""
                  style={{ width: "48%" }}
                />{" "}
              </li>
              <li>
                <img
                  src="https://cdn.pixabay.com/photo/2021/02/26/22/36/linkedin-6053397_1280.png
          "
                  alt=""
                  style={{ width: "48%",  }}
                />{" "}
              </li>
            </ul>
            <ul className="FootericonList2">
              <li>
             <p><FaRegCopyright />All right reserver to doubt Puch</p>
              </li>
              <li>
              <p>Privacy Policy</p>
              </li>
              <li>
              <p>Cookie Policy</p>
              </li>
              <li>
              <p>Terms & Conditions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtFooter;
