import React from 'react'
// CSS
import './Sidebar.css'
// COMPONENTS
import SidebarAbout from './SidebarComponents/SidebarAbout'
import SidebarLinksList from './SidebarComponents/SidebarLinksList'

const SiteSidebar = (props) => (

    <aside className="site-span-4 w-90">
        <SidebarAbout
            data={props.about_data}
        />
        <SidebarLinksList 
            title="Components"
            data={props.link_data} 
        />
    </aside>

)

export default SiteSidebar