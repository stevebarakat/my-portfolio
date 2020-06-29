import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import SvgLines from 'react-mt-svg-lines';

const Logo = () => {
  const data = useStaticQuery(graphql`
  {
    allImageSharp(filter: {fluid: {src: {regex: "/sb-logo.png/"}}}) {
      nodes {
        fixed(height: 295) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <SvgLines animate={true} duration={5000}>
      <svg viewBox="0 0 300 300" style={{padding: '0.5em 1.2em'}}>
        <path fill="none" stroke="#eee" strokeWidth="18" d="M125,0v185c0,8.28,6.72,15,15,15h70c8.28,0,15-6.72,15-15v-70c0-8.28-6.72-15-15-15H25c-8.28,0-15,6.72-15,15
	v20c0,8.28,6.72,15,15,15h60c8.28,0,15,6.72,15,15v20c0,8.28-6.72,15-15,15H0"/>
      </svg>
    </SvgLines>
  )
}

export default Logo
