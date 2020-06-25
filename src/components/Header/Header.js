import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { 
  colorBorder, 
  colorBgBody, 
  colorTheme, 
  colorBody, 
  inputButtonHeight, 
  transition
} from '../../styles/variables';
import Logo from './Logo';
import Menu from './Menu';
import Copyright from './Copyright';

const Toggler = styled.button`
        position: absolute;
        left: 100%;
        top: 20px;
        padding: 0;
        height: ${inputButtonHeight};
        width: 50px;
        text-align: center;
        font-size: 1.6rem;
        background: lighten(${colorBgBody}, 5);
        display: flex;
        justify-content: center;
        align-items: center;
        &:focus {
            border-color: ${colorBorder};
        }
        `

const SideHeader = styled.nav`
  width: 300px;
  height: 100vh;
  background: #191d2b;
  border-right: 1px solid #2e344e;
  z-index: 10;
  transition: ${transition};
  
  .not-visible{
  }
  .is-visible{
    transform: translate3d(0, 0, 0);
  }
  @media (max-width: 768px){
    transform: translate3d(-300px, 0, 0);
    width: 0;
  }
  li {
    list-style: none;
    text-align: center;
    display: block;

    &:not(:last-child) {
        margin-bottom: 1px;
    }

    a {
        text-transform: uppercase;
        font-size: 0.94rem;
        letter-spacing: 1px;
        display: block;
        padding: 5px 0;
        color: ${colorBody};
        transition: $transition;
        font-weight: 600;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 100%;
            height: 100%;
            width: 0;
            background: rgba(${colorTheme}, 0.2);
            visibility: hidden;
            transition: $transition;
            z-index: -1;
        }

        &:hover {
            color: ${colorTheme};

            &::before {
                width: 100%;
                visibility: visible;
            }
        }

        &.active {
            color: #ffffff;

            &::before {
                background: ${colorTheme};
                width: 100%;
                visibility: visible;
            }
        }
    }
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
    .menu {
        width: 100%;
        padding: 15px 5px;
    }
}
`

const Header = () => {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }

  return (
    <>
      <SideHeader style={navigationToggler ? {transform: 'translate3d(0, 0, 0)', width: '0'} : {transform: 'translate3d(0, 0, 0)'}}>
        <Toggler className={navigationToggler ? "is-visible" : "not-visible"} onClick={handleNavigationToggler}>
          {!navigationToggler ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </Toggler>
        <div className="inner">
          <div className="image">
            <Link to="/" className="link"><Logo /></Link>
          </div>
          <Menu />
          <Copyright />
        </div>
      </SideHeader>
    </>
  )
}

export default Header;
