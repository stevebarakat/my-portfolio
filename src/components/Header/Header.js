import React, { useState } from 'react'
import styled from 'styled-components';
import LineIcon from 'react-lineicons';
import { Link } from 'gatsby';
import Logo from './Logo';
import Menu from './Menu';
import { colorBorder, colorBgBody } from '../../styles/variables';
import Copyright from './Copyright';

const Toggler = styled.button`
        position: absolute;
        left: 100%;
        top: 20px;
        padding: 0;
        height: $input-button-height;
        width: 50px;
        text-align: center;
        font-size: 1.6rem;
        background: lighten(${colorBgBody}, 5);
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;

        &:focus {
            border-color: ${colorBorder};
        }
`

const SideHeader = styled.header`
  background-color: red;
  width: 300px;
  height: 100vh;
  transition: all 0.4s ease-out;
  transform: translate3d(0, 0, 0);
  height: 100vh;
  background: #191d2b;
  border-right: 1px solid #2e344e;
  z-index: 10;
  transition: all 0.4s ease-out;
  @media (max-width: 768px) {
    transform: translate3d(-300px, 0, 0);
    width: 0;
  }
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    .image {
      padding: 20px 0;
      display: block;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #2e344e;
      .link{
        height: 200px;
        width: 200px;
        border-radius: 1000px;
        border: 7px solid #2e344e;
        overflow: hidden;
        display: inline-block;
        padding-top: 10px;
      }
    }
    .is-visible {
        background: red;
    }
}
`

const Header = () => {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }

  return (
    <SideHeader>
      <nav className={navigationToggler ? "is-visible" : ""}>
        <Toggler onClick={handleNavigationToggler}>
          {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
        </Toggler>
        <div className="inner">
          <div className="image">
            <Link to="/" className="link"><Logo /></Link>
          </div>
          <Menu />
          <Copyright />
        </div>
      </nav>
    </SideHeader>
  )
}

export default Header;
