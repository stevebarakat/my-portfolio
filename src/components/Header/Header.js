import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'gatsby';
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
          <Link onClick={handleNavigationToggler} to="/">
            <Logo />
          </Link>
        </div>
        <ul className="mi-header-menu">
          <li><Link onClick={handleNavigationToggler} to="/"><span>Home</span></Link></li>
          <li><Link onClick={handleNavigationToggler} to="/portfolio"><span>Portfolio</span></Link></li>
          <li><Link onClick={handleNavigationToggler} to="/contact"><span>Contact</span></Link></li>
        </ul>
        <Copyright />
      </div>
    </nav>
  )
}


export default Header;