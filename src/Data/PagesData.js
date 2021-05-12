import React from 'react'
// Pages
import About from 'Pages/About'
import SiteComponents from 'Pages/SiteComponents'
import API from 'Pages/API'

const NavbarData = [
    {
        title: "about",
        page: <About />
    },
    {
        title: "api",
        page: <API />
    },
    {
        title: "site-components",
        page: <SiteComponents />,
        menu_list: [
            {

            }
        ]
    }
]

export default NavbarData