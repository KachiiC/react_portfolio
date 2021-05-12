import React from 'react'
// CSS
import './Sidebar.css'

const SiteSidebar = () => { 

    const dummyData = ["React Card", "React Modal", "React Slider"]

    const displayComponentCards = dummyData.map((component, index) => (
        <div className="sidebar-component-item" key={index}>
            <div className="sidebar-component-image-container">
                <img src="http://via.placeholder.com/1780x1000.png?text=Item%201" 
                    alt="sidebar-component-item-pic"
                />
            </div>
            <h3 className="sidebar-component-heading">{component}</h3>
        </div>
    ))

    return (
        <aside className="site-span-4 w-100">
            <div className="sidebar-section">
                <div className="sidebar-heading">
                    <h1>Kachii's Portfolio</h1>
                </div>
                <img src="http://via.placeholder.com/150x150.png?text=Kachi%20Icon" 
                    alt="profile_icon"
                    className="sidebar-profile-icon"
                />
                <p>A react portfolio built by Kachi Cheong</p>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-heading">
                    <h1>Components</h1>
                </div>
                {displayComponentCards}
            </div>
        </aside>
    )
}

export default SiteSidebar