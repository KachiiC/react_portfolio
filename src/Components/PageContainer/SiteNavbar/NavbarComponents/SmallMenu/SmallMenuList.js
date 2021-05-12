import React from 'react'
// COMPONENTS
import { Link } from "react-router-dom";
import SmallScreenSubList from './SmallSubList'
import TitleRender from 'Components/SiteTitleRender'

const SmallMenuList = (props) => {

    const displayMenuList = props.data.map((menu, index) => {

        const menu_title = TitleRender(menu.title)

        const renderMenuType = menu.sub_menu === true ? 
            SmallScreenSubList(menu, props.click) : (
                <Link to={`/basically_mma/${menu.title}`} key={index} onClick={props.click}>
                    <h4>{menu_title}</h4>
                </Link>
            )

        return renderMenuType
    })


    return (
        <div className="small-menu-block w-100">
            {displayMenuList}
        </div>
    )
}

export default SmallMenuList