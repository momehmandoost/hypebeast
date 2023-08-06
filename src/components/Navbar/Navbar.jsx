import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Topmenu } from "./Topmenu";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="navcontain">
      <div className="navbar">
        <div className="left">
          <SearchIcon className="search" />
        </div>
        <div className="center">
          <img src={logo} alt="logo" />
        </div>
        <div className="right">
          <div className="account">
            <PersonIcon />
            <span>Account</span>
          </div>
          <div className="carticon" onClick={() => setOpen(!open)}>
            <LocalMallIcon />
            <span>Cart</span>
          </div>
        </div>
      </div>
      <div className="navbar">
        <Topmenu />
      </div>
      {open && <Cart />}
    </div>
  );
};
