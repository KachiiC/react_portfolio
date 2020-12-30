import React, { useState } from "react";
// Data
// CSS
import "./Navbar.css";
// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./NavbarMenus";
import SmallNavbarMenus from "./SmallNavbarMenus";

const SiteNavbar = () => {

  const [smallMenu, setSmallMenu] = useState(false)

  const myFunction = () => {
    smallMenu === false ? setSmallMenu(true): setSmallMenu(false)
  }

  return (
    <header>
      <div className="topnav" id="myTopnav">
          <div className="icon" onClick={myFunction}>
            Menu <FontAwesomeIcon icon={faBars} />
          </div>
          <Navbar />
      </div>
      { smallMenu && 
          (
            <SmallNavbarMenus setFunction={() => setSmallMenu(false)} />
          )
      }
    </header>
  )
}

export default SiteNavbar