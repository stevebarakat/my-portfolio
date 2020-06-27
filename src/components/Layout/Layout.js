import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components';
import { window, document, exists } from 'browser-monads';
import { Reset } from 'styled-reset';
import Header from '../Header/Header';
import GlobalStyle from '../../styles/global.js';


const Layout = ({ children }) => {
  const [width, setWidth] = useState(`${window.innerWidth - 300}px`);
  
  useLayoutEffect(() => {
      window.addEventListener("resize", () => {
          console.log(window.innerWidth);
          if (window.innerWidth < 1200) {
              setWidth('100%');
            } else if (window.innerWidth > 1200) {
                setWidth(`${window.innerWidth - 300}px`);
              }
            });
            return function cleanup() {
                window.removeEventListener("resize", setWidth);
              };
            }, []);
            const Container = styled.div`
              display: block;
              width: ${width};
              margin: 0 auto;
              position: relative;
              float: right;
              padding: 0 4em;
            `
            return (
              <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout
