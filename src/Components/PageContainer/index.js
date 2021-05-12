import React from 'react'
// CSS
import './PageContainer.css'
// Components
import SiteSidebar from 'Components/SiteSidebar'

const PageContainer = (props) => (
    
    <main className="site-grid-system">
        <div className="site-span-8 w-100">
            {props.children}
        </div>
        <SiteSidebar />
    </main>
 
)

export default PageContainer 