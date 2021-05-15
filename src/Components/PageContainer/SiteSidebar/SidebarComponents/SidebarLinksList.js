import React from 'react'
import SidebarHeading from './SidebarHeading'
import SidebarLink from './SidebarLink'

const SidebarLinksList = (props) => {

    const displayComponentCards = props.data.map((component, index) => (
            <SidebarLink
                key={index}
                title={component.title}
                image={component.image}
                link={component.link}
            />
        )
    )

    return (
        <>
            <SidebarHeading title="Projects" />
            {displayComponentCards}
        </>
    )
}

export default SidebarLinksList