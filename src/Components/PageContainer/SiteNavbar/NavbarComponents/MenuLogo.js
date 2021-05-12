import React from 'react'
import {Link} from "react-router-dom"

const MenuLogo = (props) => (

    <div className="nav-logo w-50">
        <Link to="/">
            <h1>{props.title}</h1>
        </Link>
    </div>

)

export default MenuLogo