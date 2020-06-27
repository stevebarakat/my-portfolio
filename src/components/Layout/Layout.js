import React from "react";
import Header from "../Header/Header";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "bootstrap/dist/css/bootstrap.min.css";
import '../../scss/_style.scss';

 function Layout(props){
  return (
    <div className="mi-wrapper">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
