import React from "react";
import { Link } from "react-router-dom";
import "./Topmenu.scss";

export const Topmenu = () => {
  return (
    <div className="menu">
      <div className="item">
        <Link className="link" to="/">
          Homepage
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/">
          About
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/">
          Contact
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/">
          Stores
        </Link>
      </div>
    </div>
  );
};
