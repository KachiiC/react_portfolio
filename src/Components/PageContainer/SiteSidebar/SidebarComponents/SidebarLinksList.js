import React from 'react'
import SidebarHeading from './SidebarHeading'
import SidebarLink from './SidebarLink'

const SidebarLinksList = (props) => {

    const displayComponentCards = props.data.map((component, index) => (
            <SidebarLink
                key={index}
                title={component.title}
                image={component.image}
            />
        )
    )

    return (
        <>
            <SidebarHeading title="Components" />
            {displayComponentCards}
        </>
    )
}

export default SidebarLinksList