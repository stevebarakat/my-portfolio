import React from "react";
import Header from "../Header/Header";
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
      {children}
    </div>
  </>
)
export default Layout;
