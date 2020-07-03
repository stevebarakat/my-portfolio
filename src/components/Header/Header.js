import React, { useState } from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Hamburger from 'hamburger-react'
import Logo from './Logo';
import Copyright from './Copyright';

function Header() {
  const [navigationToggler, setNavigationToggler] = useState(false);
  const [isOpen, setOpen] = useState(true);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <AniLink onClick={handleNavigationToggler} swipe entryOffset={100} to="/">
            <Logo />
          </AniLink>
        </div>
        <ul className="mi-header-menu">
          <li><AniLink onClick={handleNavigationToggler} swipe to="/" entryOffset={100} className="link" activeClassName="active"><span>Home</span></AniLink></li>
          <li><AniLink onClick={handleNavigationToggler} swipe to="/portfolio" entryOffset={100} className="link" activeClassName="active"><span>Portfolio</span></AniLink></li>
          <li><AniLink onClick={handleNavigationToggler} swipe to="/contact" entryOffset={100} className="link" activeClassName="active"><span>Contact</span></AniLink></li>
        </ul>
        <Copyright />
      </div>
    </nav>
  )
}


export default Header;