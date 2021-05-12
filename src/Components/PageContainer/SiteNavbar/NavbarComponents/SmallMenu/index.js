import React, { useState } from 'react'
// DATA
import SmallMenuList from './SmallMenuList'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SmallMenu = (props) => {

    const [menuList, setMenuList] = useState(false)

    const handleMenuList = () => 
        menuList === false ? setMenuList(true) 
        : 
        setMenuList(false)

    return (
        <>
            <div className="small-menu-container">
                <div className="small-menu-button cursor-pointer" onClick={handleMenuList}>
                    <FontAwesomeIcon icon={faBars} /> MENU
                </div>
            </div>
            { menuList && (
                <SmallMenuList 
                    data={props.data} 
                    click={handleMenuList} 
                /> 
            )}
        </>
    )
}

export default SmallMenu