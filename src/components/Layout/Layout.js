import React from "react";
import Header from "../Header/Header";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css";
import '../../scss/_style.scss';

const item = {
  hidden: {
    opacity: 0,
    x: -1400,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const Layout = ({ children, location, url }) => {

  return(
  <>
    <Header/>
    <div className="mi-wrapper">
      <motion.main
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.3 }}
      >
        {children}
      </motion.main>
    </div>
  </>
)}
export default Layout;
