import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Topmenu } from "./Topmenu";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navcontain">
      <div className="navbar">
        <div className="left">
          <SearchIcon />
        </div>
        <div className="center">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <div className="account">
            <PersonIcon />
            <span>Account</span>
          </div>
          <div className="cart">
            <LocalMallIcon />
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="navbar">
        <Topmenu />
      </div>
    </div>
  );
};
