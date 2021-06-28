import React from 'react'
import NavbarLogo from '../logo.png'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#"><img className="logo" src={NavbarLogo}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">ANA SƏHİFƏ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">HAQQIMDA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">XİDMƏT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">ƏLAQƏ</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
