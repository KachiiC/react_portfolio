import React from 'react'
// DATA
import PagesData from 'Data/PagesData'
// CSS
import './SiteNavbar.css'
import './Responsive.css'
// COMPONENTS
import MenuLogo from './NavbarComponents/MenuLogo'
import MenuList from './NavbarComponents/MenuList'
import SmallMenu from './NavbarComponents/SmallMenu'

const SiteNavbar = (props) => (

  <nav className="w-100">
    <MenuLogo title="React Portfolio"/>
    <MenuList data={props.data} />
    <SmallMenu data={props.data}/>
  </nav>

)


export default SiteNavbar;