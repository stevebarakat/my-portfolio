import React, { useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Hamburger from 'hamburger-react'
import Logo from './Logo';
import Copyright from './Copyright';

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleNavigationToggler = () => {
    setIsToggled(!isToggled);
  }

  return (
    <nav className={isToggled ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        <Hamburger toggled={isToggled} />
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <AniLink 
            onClick={handleNavigationToggler} 
            swipe
            duration={0.5} 
            direction={ isToggled ? "right" : "left" }
            entryOffset={100} 
            to="/"
          >
            <Logo isToggled={isToggled} />
          </AniLink>
        </div>
        <ul className="mi-header-menu">
          <li><AniLink onClick={handleNavigationToggler} duration={0.5} direction={ isToggled ? "right" : "left" } swipe to="/" entryOffset={100} className="link" activeClassName="active"><span>Home</span></AniLink></li>
          <li><AniLink onClick={handleNavigationToggler} duration={0.5} direction={ isToggled ? "right" : "left" } swipe to="/portfolio" entryOffset={100} className="link" activeClassName="active"><span>Portfolio</span></AniLink></li>
          <li><AniLink onClick={handleNavigationToggler} duration={0.5} direction={ isToggled ? "right" : "left" } swipe to="/contact" entryOffset={100} className="link" activeClassName="active"><span>Contact</span></AniLink></li>
        </ul>
        <Copyright />
      </div>
    </nav>
  )
}


export default Header;