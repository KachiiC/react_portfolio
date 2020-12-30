import React from "react";
// Data
import PageData from 'Data/PageData'
import { Link } from 'react-router-dom'

const SmallNavbarMenus = (props) => {

  const setFunction = props.setFunction

  const smallDisplayMenu = PageData.map((menu, index) => {

    const displayLink = menu.path.split("-").join(" ")

    return (
        <Link to={`/${menu.path}`} 
          className="small-menu-nav" 
          key={index}
        >
          <div onClick={setFunction}>
            {displayLink}
          </div>
          <hr className="small-menu-divider"/>
        </Link>
    )
  })

  return (
        <div className="small-menu-block">
            {smallDisplayMenu}
        </div>
    )

}

export default SmallNavbarMenus