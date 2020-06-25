import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

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
    <>
      <Img fixed={data.allImageSharp.nodes[0].fixed} />
    </>
  )
}

export default Logo
