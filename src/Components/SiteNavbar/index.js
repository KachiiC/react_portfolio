import React from 'react'
// CSS
import './navbar.css'
// Data
import navbar_menu from './navbar-menu'
import {Link} from 'react'

const SiteNavbar = () => {

    const displayNav = navbar_menu.map((menu) => (
            <a href={`/${menu.name}`}>
                {menu.name}
            </a>
        )
    )

    return (

        <div className="topnav" id="myTopnav">
            {displayNav}
            <a href="#" className="icon" alt="responsive_menu"> 
                X
            </a>
        </div>

    )
}

export default SiteNavbar