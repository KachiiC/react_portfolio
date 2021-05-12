import React from 'react'
// COMPONENTS
import SidebarHeading from './SidebarHeading'

const SidebarAbout = (props) => (

    <div className="sidebar-section">
        <SidebarHeading title={props.data.title} />
        <h3>{props.data.sub_heading}</h3>
        <img src={props.data.image}
            alt="profile_icon"
            className="sidebar-profile-icon"
        />
        <p>{props.data.description}</p>
    </div>
    
)


export default SidebarAbout