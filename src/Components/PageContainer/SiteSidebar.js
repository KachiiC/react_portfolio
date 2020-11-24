import React from 'react'


const SiteSidebar = () => {

    const project_items = ["Site Modal", "Site Carousel"]

    const displayProjects = project_items.map((project) => {

        return (
            <div className="site-project-item">    
                <img src="http://via.placeholder.com/178x100.png?text=Me" 
                    className="site-project-pic" 
                    alt="profile" 
                />
                <h3 className="site-project-title">{project}</h3>
            </div>
        )
    })
 

    return (
        <div className="sidebar-section">
            <div className="sidebar-section-heading">
                <h2>Kachi Cheong</h2>
            </div>
            <div className="sidebar-section-single">
                <h2>React Portfolio</h2>
                <img src="http://via.placeholder.com/150x150.png?text=Me" 
                    className="profile-pic" 
                    alt="profile" 
                />
                <p>A portfolio of projects using react.</p>
            </div>
            <div className="sidebar-section-heading">
                <h2>Projects</h2>
            </div>
            <div className="sidebar-section-single">
                {displayProjects}
            </div>
        </div>
    )
}

export default SiteSidebar