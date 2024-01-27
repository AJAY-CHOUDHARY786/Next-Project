import React, { useState } from "react";

const HomeCourses = () => {
  const [show, setShow] = useState(1);
  return (
    <section
      className="mt-1 pt-md-5 pt-2 pb-4"
      style={{ background: "#FAFAFA" }}
    >
      <div className="container mt-md-5 mt-3">
        <h3 className="text-md-start text-center font-fam-bold font-32">
          Explore Exams{" "}
          <span style={{ color: "rgb(78, 11, 84)" }}> Ignite Success!</span>
        </h3>{" "}
        
        <div className="row flex-nowrap my-5 ps-2">
          <div
            className="col-5 col-md-3 px-sm-2 p-md-3 p-0"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
              borderRadius: 8,
            }}
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-md-3 px-2 pt-2">
              <ul
                className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start col-12"
                id="menu"
              >
                <li className="col-12 ver-menu">
                  <a
                    href="#come-hear-slider"
                    id="linkverMenuId1"
                    className="nav-link px-0 align-middle"
                    onClick={(e) => setShow(1)}
                  >
                    <div
                      className="d-flex justify-content-between cat-menu-pad areaVerticalMenu"
                      id="areaVerticalMenu1"
                    >
                      <span
                        className="ms-1 d-sm-inline ver-menu-name"
                        id="verMenuId1"
                      >
                        CAT
                      </span>
                      <span
                        className="arrow-cat arrow-rit arrowVerticalMenu"
                        id="arrowVerticalMenu1"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-12 ver-menu">
                  <a
                    href="#come-hear-slider"
                    id="linkverMenuId1"
                    className="nav-link px-0 align-middle"
                    onClick={(e) => setShow(2)}
                  >
                    <div
                      className="d-flex justify-content-between cat-menu-pad areaVerticalMenu"
                      id="areaVerticalMenu1"
                    >
                      <span
                        className="ms-1 d-sm-inline ver-menu-name"
                        id="verMenuId2"
                      >
                        CLAT
                      </span>
                      <span
                        className="arrow-cat arrow-rit arrowVerticalMenu"
                        id="arrowVerticalMenu1"
                      />
                    </div>
                  </a>
                </li>
                <li className="col-12 ver-menu">
                  <a
                    href="#come-hear-slider"
                    id="linkverMenuId1"
                    className="nav-link px-0 align-middle"
                    onClick={(e) => setShow(3)}
                  >
                    <div
                      className="d-flex justify-content-between cat-menu-pad areaVerticalMenu"
                      id="areaVerticalMenu1"
                    >
                      <span
                        className="ms-1 d-sm-inline ver-menu-name"
                        id="verMenuId3"
                      >
                        IPMAT
                      </span>
                      <span
                        className="arrow-cat arrow-rit arrowVerticalMenu"
                        id="arrowVerticalMenu1"
                      />
                    </div>
                  </a>
                </li>
                <li class="col-12 ver-menu">
                  <a
                    href="#come-hear-slider"
                    id="linkverMenuId1"
                    class="nav-link px-0 align-middle"
                    onClick={(e) => setShow(4)}
                  >
                    <div
                      class="d-flex justify-content-between cat-menu-pad areaVerticalMenu"
                      id="areaVerticalMenu1"
                    >
                      <span
                        class="ms-1 d-sm-inline ver-menu-name"
                        id="verMenuId4"
                      >
                        NIFT
                      </span>
                      <span
                        class="arrow-cat arrow-rit arrowVerticalMenu"
                        id="arrowVerticalMenu1"
                      ></span>
                    </div>
                  </a>
                </li>
                <li className="col-12 ver-menu">
                  <a
                    id="linkverMenuId1"
                    className="nav-link px-0 align-middle"
                    onClick={(e) => setShow(5)}
                  >
                    <div
                      className="d-flex justify-content-between cat-menu-pad areaVerticalMenu"
                      id="areaVerticalMenu1"
                    >
                      <span
                        className="ms-1 d-sm-inline ver-menu-name"
                        id="verMenuId5"
                      >
                        CUET
                      </span>
                      <span
                        className="arrow-cat arrow-rit arrowVerticalMenu"
                        id="arrowVerticalMenu1"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="sidebar-menu-cat"
            className="course-mh"
          >
            <div
              className="col-7 col-md-9 my-3 ps-md-4 ps-2 "
              style={{ height: 160, width: "100%" }}
            >
              <div
                className={show === 1 ? "d-flex  col-md-12 flex-wrap" : "course-hidden"} 
                id="homePageCourseCategory"
              >
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2024.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CAT-2024</div>
                      <div className="card-text col-md-5  col-4">Courses</div>
                      <div className="card-more1">Explore</div>
                      <div className="card-new-inset card-new-inset-bkg1">
                        <img
                          className="pw_banner_img"
                          src="/Faculty Pic/Mohit Sir pic.png"
                          alt="img1"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2025.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CAT-2025</div>
                      <div className="card-text col-md-5  col-4">Courses</div>
                      <div className="card-more2">Explore</div>
                      <div className="card-new-inset card-new-inset-bkg2">
                        <img
                          className="pw_banner_img"
                          src="/Faculty Pic/Mohit Sir pic.png"
                          alt="img2"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>


              <div
                className={show === 2 ? "d-flex  col-md-12 flex-wrap" : "course-hidden"} 
                id="homePageCourseCategory"
              >
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2024.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CLAT-2024</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2025.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CLAT-2024</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={show === 3 ? "d-flex  col-md-12 flex-wrap" : "course-hidden"} 
                id="homePageCourseCategory"
              >
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2024.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">IPMAT-2024</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2025.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">IPMAT-2025</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={show === 4 ? "d-flex  col-md-12 flex-wrap" : "course-hidden"} 
                id="homePageCourseCategory"
              >
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2024.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">NIFT-2024</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2025.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">NIFT-2025</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className={show === 5 ? "d-flex  col-md-12 flex-wrap" : "course-hidden"} 
                id="homePageCourseCategory"
              >
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2024.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CUET-2024</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-4 col-12 p-2">
                  <a
                    href="courses-cat-2025.html"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="font-fam-medium card-new"
                      style={{
                        position: "relative",
                        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="card-heading">CUET-2025</div>
                        <div className="card-text col-md-5  col-4">Courses</div>
                        <div className="card-more1">Explore</div>
                        <div className="card-new-inset card-new-inset-bkg1">
                          <img
                            className="pw_banner_img"
                            src="/Faculty Pic/Mohit Sir pic.png"
                            alt="img1"
                          />
                        </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------------------------------------------------------------------- */}
            {/* form for cat start */}
            <div
              className="col-7 col-md-9 my-3 text-center"
              style={{
                display: "none",
                boxShadow: "0px 2px 10px gray",
                borderRadius: 8,
              }}
            >
              <div className="first-heading ">
                <h1 className="pt-3">First heading</h1>
              </div>
              <div
                className="first-droupdown text-align mx-auto my-3"
                style={{
                  width: 300,
                  boxShadow: "0px 2px 10px gray",
                  borderRadius: 8,
                }}
              >
                <div className="row">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div
                className="first-droupdown text-align mx-auto my-3"
                style={{
                  width: 300,
                  boxShadow: "0px 2px 10px gray",
                  borderRadius: 8,
                }}
              >
                <div className="row">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="text-align mx-auto my-3">
                <form>
                  <table className="table-fill">
                    <thead>
                      <tr>
                        <th className="text-left">Month</th>
                        <th className="text-left">Sales</th>
                        <th className="text-left">Select</th>
                      </tr>
                    </thead>
                    <tbody className="table-hover">
                      <tr>
                        <td className="text-left">January</td>
                        <td className="text-left">$ 50,000.00</td>
                        <td className="text-left">
                          <input
                            className="c-input "
                            type="checkbox"
                            defaultChecked
                            disabled
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">February</td>
                        <td className="text-left">$ 10,000.00</td>
                        <td className="text-left">
                          <input className="c-input " type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">March</td>
                        <td className="text-left">$ 85,000.00</td>
                        <td className="text-left">
                          <input className="c-input " type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">April</td>
                        <td className="text-left">$ 56,000.00</td>
                        <td className="text-left">
                          <input className="c-input " type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">May</td>
                        <td className="text-left">$ 98,000.00</td>
                        <td className="text-left">
                          <input className="c-input " type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="submit" className="btn btn-primary m-4">
                    Submit
                  </button>
                </form>
              </div>
              {/* form for cat end*/}
            </div>

            
               
             
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
