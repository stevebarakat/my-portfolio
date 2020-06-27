import React from "react";
import Header from "../Header/Header";
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
