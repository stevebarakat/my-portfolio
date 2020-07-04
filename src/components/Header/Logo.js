import React from 'react';
import { motion } from 'framer-motion';
import SvgLines from 'react-mt-svg-lines';

const Logo = ({ isToggled }) => {
  return (
      <motion.div
        animate={isToggled ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
        ease="easeOut"
      >
        <SvgLines animate={true} duration={4000} timing="cubic-bezier(.42,0,1,1)">
          <svg viewBox="0 0 300 300">
          <path fill="none" stroke="#a4acc4" strokeWidth="18" d="M150.39,14.54v185.57c0,9.47,7.68,17.14,17.14,17.14h68.07c9.47,0,17.14-7.68,17.14-17.14v-67.07
	c0-9.47-7.68-17.14-17.14-17.14H49.98c-9.47,0-17.14,7.68-17.14,17.14v16.39c0,9.47,7.68,17.14,17.14,17.14h63.03
	c9.47,0,17.14,7.68,17.14,17.14v18.33c0,8.4-6.81,15.2-15.2,15.2l-63.31-0.01c-17.2,0-32.2-11.74-36.3-28.45
	C6.55,152.99,7.91,111.2,26.3,79.35C64.99,12.34,150.28-10.99,217.6,26.67c68.98,38.59,92.87,127.76,52.43,195.66
	c-39.47,66.27-125,88.72-192.02,50.03c-21.3-12.3-53.55-38.4-62.27-81.91"/>
          </svg>
        </SvgLines>
      </motion.div>
  )
}

export default Logo
