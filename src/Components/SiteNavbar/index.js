import React from 'react'
import './navbar.css'

const SiteNavbar = () => {


    return (

        <div className="topnav" id="myTopnav">
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#" className="icon" alt="responsive_menu"> 
                X
            </a>
        </div>

    )
}

export default SiteNavbar