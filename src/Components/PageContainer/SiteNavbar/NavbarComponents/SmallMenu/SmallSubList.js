import React, {useState} from 'react'
// COMPONENTS
import TitleRender from 'Components/SiteTitleRender'
import {Link} from "react-router-dom";

const SmallScreenSubList = (props, click) => {

    const [subList, setSubList] = useState(false)

    const displaySubList = props.menu_list.map((sub, index) => {
        
        const displaySub = TitleRender(sub.title)

        return (
            <Link to={`/react_portfolio/${sub.title}`} 
                onClick={click}
                key={index}
            >
                <h5>{displaySub}</h5>
            </Link>
        )
    })

    const displayTitle = TitleRender(props.title)

    const handleClick = () => subList === false ? setSubList(true) : setSubList(false)

    return (
        <>
            <h4 onClick={handleClick}>{displayTitle}</h4>
            {subList && displaySubList}
        </>
    )
}

export default SmallScreenSubList
