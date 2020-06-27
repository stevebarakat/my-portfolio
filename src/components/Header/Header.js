import React, { useState } from 'react'
import { Link } from 'gatsby';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from './Logo';
// import Copyright from './Copyright';

function Header() {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="mi-header-menu">
          <li><Link to="/" className="link" activeClassName="active"><span>Home</span></Link></li>
          <li><Link to="/about" className="link" activeClassName="active"><span>About</span></Link></li>
          <li><Link to="/resume" className="link" activeClassName="active"><span>Resume</span></Link></li>
          <li><Link to="/portfolio" className="link" activeClassName="active"><span>Portfolio</span></Link></li>
          <li><Link to="/contact" className="link" activeClassName="active"><span>Contact</span></Link></li>
        </ul>
        {/* <Copyright /> */}
      </div>
    </nav>
  )
}


export default Header;