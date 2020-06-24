import React, { useState } from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';
import LineIcon from 'react-lineicons';
import Logo from './Logo';
import { colors } from '../../styles/variables'

const SiteNav = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 300px;
    background: ${lighten(0.2, colors.colorBgBody)};
    border-right: 1px solid ${colors.colorBorder};
    z-index: 10;
    .inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        overflow-y: auto;
    }
    .image {
        padding: 20px 0;
        display: block;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid ${colors.colorBorder};

        a {
            height: 200px;
            width: 200px;
            border-radius: 1000px;
            border: 7px solid ${colors.colorBorder};
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .toggler {
        position: absolute;
        left: 100%;
        top: 20px;
        padding: 0;
        height: $input-button-height;
        width: 50px;
        text-align: center;
        font-size: 1.6rem;
        background: lighten(0.5, ${colors.colorBgBody});
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;

        &:focus {
            border-color: ${colors.colorBorder};
        }
    }
    .menu {
        width: 100%;
        padding: 15px 5px;

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
                color: $color-body;
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
                    background: rgba($color-theme, 0.2);
                    visibility: hidden;
                    transition: $transition;
                    z-index: -1;
                }

                &:hover {
                    color: $color-theme;

                    &::before {
                        width: 100%;
                        visibility: visible;
                    }
                }

                &.active {
                    color: #ffffff;

                    &::before {
                        background: $color-theme;
                        width: 100%;
                        visibility: visible;
                    }
                }
            }
        }
    }
    .is-visible {
      opacity: 1;
    }
    .not-visible {
      opacity: 0;
    }
`

const Menu = () => {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }
  console.log(navigationToggler);
  return (
    <SiteNav className={navigationToggler ? "is-visible" : "not-visible"}>
      <button onClick={handleNavigationToggler} className="toggler">
        {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />}
      </button>
      <div className="inner">
        <div className="image">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="menu">
          <li><Link to="/" title="" >Home</Link></li>
          <li><Link to="/" title="" >About</Link></li>
          <li><Link to="/" title="" >Resume</Link></li>
          <li><Link to="/" title="" >Portfolio</Link></li>
          <li><Link to="/" title="" >Contact</Link></li>
        </ul>
      </div>
    </SiteNav>
  )
}

export default Menu
