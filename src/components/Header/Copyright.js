import React from 'react'
import styled from 'styled-components';
import { colorBody, colorTheme, colorBorder } from '../../styles/variables';

const SiteCopyright = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 15px 0;
  border-top: 1px solid ${colorBorder};

  a {
      color: ${colorBody};
      transition: $transition;

      &:hover {
          color: ${colorTheme};
      }
  }
`
const Copyright = () => {
  return (
    <SiteCopyright>&copy; {new Date().getFullYear()} <b><a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com">Steve Barakat</a></b></SiteCopyright>
  )
}

export default Copyright
