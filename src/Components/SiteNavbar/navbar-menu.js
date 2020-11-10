import React from 'react'
// Pages
import About from 'Pages/About'
import SiteComponents from 'Pages/SiteComponents'

const navbar_menu = [
    {
        name: "About",
        path: "about",
        page: <About />
    },
    {
        name: "Site Components",
        path: "site-components",
        page: <SiteComponents />
    }
]

export default navbar_menu