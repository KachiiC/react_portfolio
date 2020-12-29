import React from 'react'
// Pages
import About from 'Pages/About'
import SiteComponents from 'Pages/SiteComponents'
import API from 'Pages/API'

const NavbarData = [
    {
        path: "about",
        page: <About />
    },
    {
        path: "api",
        page: <API />
    },
    {
        path: "site-components",
        page: <SiteComponents />
    }
]

export default NavbarData