import React from "react";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../scss/_style.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="mi-wrapper">
      {children}
    </div>
  </>
)
export default Layout;
