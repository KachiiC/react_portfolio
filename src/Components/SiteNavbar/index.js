import React, { useState, useEffect } from "react";
// CSS
import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import navbar_menu from './navbar-menu'
import { Link } from 'react-router-dom'

const Header = () => {
    
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => 
        mediaQuery.matches? setIsSmallScreen(true) : setIsSmallScreen(false); 

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const displayNav = navbar_menu.map((menu) => {

    const displayName = menu.path.split("-").map((letter) => {
      return letter.toUpperCase()
    }).join(" ")

    return (
      <div className="nav-menu">
        <Link to={`/${menu.path}`} className="nav-links">
            {displayName}
        </Link>
      </div>
    )
  })

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            {displayNav}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        X
      </button>
    </header>
  )
}

export default Header