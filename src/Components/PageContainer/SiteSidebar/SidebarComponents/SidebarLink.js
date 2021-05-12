import React from 'react'

const SidebarLink = (props) => (
    
    <div className="site-grid-system sidebar-links">
        <h3 className="site-span-6 m-auto">
            {props.title}
        </h3>
        <div className="site-span-6 w-80">
            <img src={props.image}
                alt="sidebar-component-item-pic"
                className="site-responsive-image"
            />
        </div>
    </div>
    
)

export default SidebarLink