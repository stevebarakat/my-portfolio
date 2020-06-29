import Particles from 'react-particles-js';
import styled from 'styled-components';

export const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: -1;
`
export const paramConfig = {
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