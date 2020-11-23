import React from 'react'
// CSS
import './PageContainer.css'

const PageContainer = (props) => {

    return (
        <main>       
            <div className="main-section">
                {props.children}
            </div>
            <div className="sidebar-section">
                <h1>Sidebar</h1>
            </div>
        </main>
        
    )
}

export default PageContainer 