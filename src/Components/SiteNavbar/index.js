import React from 'react'
// CSS
import './navbar.css'
// Data
import navbar_menu from './navbar-menu'
import { Link } from 'react-router-dom'

const SiteNavbar = () => {

    const displayNav = navbar_menu.map((menu) => (
            <div className="nav-menu">
                <Link to={`/${menu.path}`}>
                    {menu.name}
                </Link>
            </div>
        )
    )

    return (

        <div className="topnav" id="myTopnav">
            {displayNav}
            <div className="icon" alt="responsive_menu"> 
                <Link to="#">
                    X
                </Link>
            </div>
        </div>

    )
}

export default SiteNavbar