import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import { useHistory } from "react-router-dom";
import {SideBarData} from './data'
import "./index.css";

const SideBar = ({ activeItem }) => {
  const history = useHistory();

  const handleOnChangePage = (URL) => {
    return history.push(`${URL}`);
  };

  return (
    <MuiDrawer variant="permanent" className="side-bar">
      <ul className="side-bar__list">
      { SideBarData.map((navItem, index) => 
    (    <li onClick={() => handleOnChangePage(navItem.link)}  className={activeItem === navItem.title ? "side-bar__list-item side-bar__list-item--active" : "side-bar__list-item"} key={index}>
          <div className="side-bar__list-item__title">{navItem.title}</div>
        </li>)
      )}
    
      </ul>
    </MuiDrawer>
  );
};

export default SideBar;
