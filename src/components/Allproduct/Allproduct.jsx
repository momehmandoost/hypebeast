import React from "react";
import "./Allproduct.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export const Allproduct = () => {
  return (
    <div className="productcontain">
      <h1>Or subscribe to the newsletter</h1>
      <div className="submenu">
        <div className="items">
          <ul>
            <li>All products</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
        <div className="filter">
          filter
          <FilterAltIcon />
        </div>
      </div>
    </div>
  );
};
