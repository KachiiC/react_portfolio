import React from "react";
// Data
import PageData from 'Data/PageData'
import { Link } from 'react-router-dom'

const NavbarMenus = () => {

  const displayMenu = PageData.map((menu, index) => {

    const displayLink = menu.path.split("-").join(" ")
    
    return (
        <Link to={`/${menu.path}`} className="site-nav-link" key={index}>
          {displayLink}
        </Link>
    )
  })

  return (
    <div>
        {displayMenu}
    </div>
  )
}

export default NavbarMenus