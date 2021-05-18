import React from 'react'
// COMPONENTS
import DropdownList from './Dropdown'
import TitleRender from 'Components/SiteTitleRender'
import {Link} from "react-router-dom";

const MenuList = (props) => {

    const Menu = props.data.map((menu, index) => {

        const regular_menu = (
            <Link to={`/react_portfolio/${menu.title}`} key={index}>
                {TitleRender(menu.title)}
            </Link>
        )

        const renderMenuType = menu.sub_menu === true ? 
            DropdownList(menu)
            : 
            regular_menu

        return (
            <div key={index} className={`site-span-1 nav-heading`}>
                {renderMenuType}
            </div>
        )
    })

    return (
        <div className="nav-menu-list site-grid-system w-50"
            style={{"gridTemplateColumns": `repeat(${props.data.length},1fr)`}}
        >
            {Menu}
        </div>
    )
}

export default MenuList