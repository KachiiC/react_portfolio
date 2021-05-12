import React from 'react'
// COMPONENTS
import TitleRender from 'Components/SiteTitleRender'
import {Link} from "react-router-dom";

const DropdownList = (props) => {

    const displayList = props.menu_list.map((sub, index) => {

        const displayTitle = TitleRender(sub.title)

        return (
            <Link to={`/react_portfolio/${sub.title}`}>
                <h6 key={index}>{displayTitle}</h6>
            </Link>
        )
    })

    const dropdown_title = TitleRender(props.title)

    return (
        <>
            {dropdown_title}
            <div className="nav-sub-menu">
                {displayList}
            </div>
        </>
    )
  }

export default DropdownList