import React from 'react'
// CSS
import './SiteNavbar.css'
import './Responsive.css'
// Components
import MenuLogo from './NavbarComponents/MenuLogo'
import MenuList from './NavbarComponents/MenuList'
import SmallMenu from './NavbarComponents/SmallMenu'

const SiteNavbar = () => (

  <nav className="w-100">
    <MenuLogo />
    <MenuList />
    <SmallMenu />
  </nav>

)


export default SiteNavbar;