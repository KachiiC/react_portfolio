import React from 'react'
// CSS
import './PageContainer.css'
// Components
import SiteSidebar from './SiteSidebar'

const PageContainer = (props) => (

    <body>
        <div className="container">
            <main>
                {props.children}
            </main>
            <SiteSidebar />
        </div>
    </body>
        
)

export default PageContainer 