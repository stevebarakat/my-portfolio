import React from 'react'
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Header from '../Header/Header';
import GlobalStyle from '../../styles/global.js';

const Site = styled.div`
  display: flex;
`

const Layout = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Site>
        <Header />
        <div>{children}</div>
      </Site>
    </>
  )
}

export default Layout
