import React from 'react'
const Header = () => {
  return (
    <header>
  <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded fixed-top" style={{backgroundColor: 'white'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img src="/Coachify purple logo.svg" alt /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight:'100'}}>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Courses
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="coachify-cat-2024-page.html">CAT</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="coachify-clat-2024-page.html">CLAT</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="coachify-ipmat-2024-page.html">IPMAT</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="coachify-nift-2024-page.html">NIFT</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="coachify-cuet-2024-page.html">CUET</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Center Tour</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ask Doubts</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          
          <a className="btn btn-outline-success" type="submit">
            Login/Register
          </a>
        </form>
      </div>
    </div>
  </nav>
</header>


  )
}

export default Header