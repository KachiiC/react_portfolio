import React from 'react'
// CSS
import './PageContainer.css'
import SiteSidebar from './SiteSidebar'
import SiteMainSection from './SiteMainSection'

const PageContainer = (props) => (

    <main>       
        <SiteMainSection>
            {props.children}
        </SiteMainSection>
        <SiteSidebar />
    </main>
        
)

export default PageContainer 