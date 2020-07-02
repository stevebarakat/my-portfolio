import React from 'react'
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from 'gatsby';
import { colorTheme } from '../../styles/variables';

const MainMenu = styled.div`
    width: 100%;
    padding: 15px 5px;
    .link {
      text-transform: uppercase;
      font-size: 0.94rem;
      letter-spacing: 1px;
      display: block;
      padding: 5px 0;
      color: #a4acc4;
      transition: all 0.4s ease-out;
      font-weight: 600;
      /* position: relative; */
      overflow: hidden;
      z-index: 1;
      font-family: "Nunito";
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 100%;
          height: 100%;
          width: 0;
          background: rgba(3, 127, 255, 0.2);
          visibility: hidden;
          transition: all 0.4s ease-out;
          z-index: -1;
        }
          &:hover{
            color: ${colorTheme};
            background: rgba(3, 127, 255, 0.2);
            transform: translateX(0px);
          }
    }
    .active {
      color: white;
      background: ${colorTheme};
    }
`

const Menu = () => {
  return (
    <MainMenu>
      <ul>
        <li><AniLink cover direction="up" bg="rebeccapurple" to="/" className="link" activeClassName="active"><span>Home</span></AniLink></li>
        <li><Link to="/about" className="link" activeClassName="active"><span>About</span></Link></li>
        <li><AniLink cover direction="up" bg="rebeccapurple" to="/resume" className="link" activeClassName="active"><span>Resume</span></AniLink></li>
        <li><Link to="/portfolio" className="link" activeClassName="active"><span>Portfolio</span></Link></li>
        <li><AniLink cover direction="up" bg="rebeccapurple" to="/contact" className="link" activeClassName="active"><span>Contact</span></AniLink></li>
      </ul>
    </MainMenu>
  )
}

export default Menu
