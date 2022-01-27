import React from "react";
import SideBar from "./SideBar";
import TopNavbar from "./Navbar";
import "./index.css";

const Layout = ({ activeItem, children }) => {


  return(
    <div className="layout">
      <SideBar activeItem={activeItem} />
      <div className="layout__inner">
        <div className="layout__top-bar">
          <TopNavbar   />
        </div>
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
