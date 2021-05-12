import React from 'react'
// CSS
import './PageContainer.css'
// Components
import SiteSidebar from 'Components/PageContainer/SiteSidebar'
import SidebarData, {SidebarAboutData} from 'Data/SidebarData'

const PageContainer = (props) => (
    
    <main className="site-grid-system main-container">
        <div className="site-span-8 w-100">
            {props.children}
        </div>
        <SiteSidebar 
            link_data={SidebarData} 
            about_data={SidebarAboutData}
        />
    </main>
 
)

export default PageContainer 