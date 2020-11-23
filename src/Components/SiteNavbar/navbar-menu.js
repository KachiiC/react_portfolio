import React from 'react'
// Pages
import About from 'Pages/About'
import SiteComponents from 'Pages/SiteComponents'
import API from 'Pages/API'

const navbar_menu = [
    {
        name: "About",
        path: "about",
        page: <About />
    },
    {
        name: "API",
        path: "api",
        page: <API />
    },
    {
        name: "Site Components",
        path: "site-components",
        page: <SiteComponents />
    }
]

export default navbar_menu