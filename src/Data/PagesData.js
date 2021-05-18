import React from 'react'
// Pages
import About from 'Pages/About'
import SiteComponents from 'Pages/Components/SiteComponents'
import API from 'Pages/API'
import ComponentLibraries from 'Pages/Components/ComponentLibraries'

const NavbarData = [
    {
        title: "about",
        page: About
    },
    {
        title: "api",
        page: API
    },
    {
        title: "components",
        sub_menu: true,
        menu_list: [
            {
                title: "site-components",
                page: <SiteComponents />
            },
            {
                title: "component-libraries",
                page: <ComponentLibraries />
            },
        ]
    }
]

export default NavbarData