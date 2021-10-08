import React from 'react'
import NavbarLogo from '../logo.png'
import {Link} from 'react-scroll'
// FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#"><img className="logo" src={NavbarLogo}></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: 'blue' }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="home" smooth="true" className="nav-link active text-primary " href="#">ANA SƏHİFƏ</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth="true" className="nav-link text-primary" href="#">HAQQIMDA</Link>
          </li>
          <li className="nav-item">
            <Link to="services" smooth="true" className="nav-link active text-primary " href="#">XİDMƏTLƏR</Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth="true" className="nav-link active text-primary " href="#">TƏCRÜBƏLƏR</Link>
          </li>
          <li className="nav-item">
            <a  target="_blank" className="nav-link text-primary" href="https://github.com/Qulam2004">PROYEKTLƏRİM</a>
          </li>
          <li className="nav-item">
            <Link to="contactme" smooth="true" className="nav-link text-primary" href="#">BİZİMLƏ ƏLAQƏ</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
