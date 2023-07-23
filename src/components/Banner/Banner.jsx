import React from "react";
import "./Banner.scss";
import logo from "../../assets/zara.png";

export const Banner = () => {
  return (
    <div className="bannercontain">
      <div className="empty"></div>
      <div className="brand">
        <img src={logo} alt="zara" />
        <div className="desc">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </div>
        <div className="btn">See Collection</div>
      </div>
    </div>
  );
};
