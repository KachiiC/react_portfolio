import React, { useState } from "react";
// Data
import NavbarData from 'Data/Navbar/NavBarData'
import { Link } from 'react-router-dom'
// CSS
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SiteNavbar = () => {

  const [smallMenu, setSmallMenu] = useState(false)

  const myFunction = () => {
    smallMenu === false ? setSmallMenu(true): setSmallMenu(false)
  }

  const displayMenu = NavbarData.map((menu, index) => {

    const displayLink = menu.path.split("-").join(" ")
    
    return (
        <Link to={`/${menu.path}`} className="site-nav-link" key={index}>
          {displayLink}
        </Link>
    )
  })

  const smallDisplayMenu = NavbarData.map((menu, index) => {

    const displayLink = menu.path.split("-").join(" ")

    return (
        <Link to={`${menu.path}`} className="small-menu-nav" key={index}>
          {displayLink}
          <hr className="small-menu-divider"/>
        </Link>
    )
  })

  return (
    <header>
      <div className="topnav" id="myTopnav">
          <div className="icon" onClick={myFunction}>
            Menu <FontAwesomeIcon icon={faBars} />
          </div>
          {displayMenu}
      </div>
      { smallMenu && 
          (
            <div className="small-menu-block">
              {smallDisplayMenu}
            </div>
          )
      }
    </header>
  )
}

export default SiteNavbar