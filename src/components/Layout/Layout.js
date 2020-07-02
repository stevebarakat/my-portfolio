import React from "react";
import Header from "../Header/Header";
import { motion, AnimatePresence } from 'framer-motion';
import shortid from 'shortid';
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

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="mi-wrapper">
      {/* <AnimatePresence> */}
        {/* <motion.main
          key={shortid.generate()}
          initial={{ x: -1400 }}
          animate={{ x: 0 }}
          exit={{ x: 1400 }}
          transition={{ duration: 1.3 }}
        > */}
          {children}
        {/* </motion.main> */}
      {/* </AnimatePresence> */}
    </div>
  </>
)
export default Layout;
