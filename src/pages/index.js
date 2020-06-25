import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Particles from "react-particles-js";
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import { colorTheme } from '../styles/variables.js';

const HeroUnit = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1{
    font-weight: 700;
  }
`
const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: -1;
`

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      wordpressSiteMetadata {
        description
        name
      }
    }
  `)
  const { name, description } = data.wordpressSiteMetadata;

  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };

  return (
    <Layout>
        {/* <StyledParticles params={paramConfig} /> */}
      <HeroUnit>
          <h1>Hi, I am <span style={{color: colorTheme}}>{name}</span></h1>
          <p>{description}</p>
      </HeroUnit>
    </Layout>
  )
}

export default Home
