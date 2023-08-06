import React from "react";
import "./Brand.scss";
import brand1 from "../../assets/brand/01.png";
import brand2 from "../../assets/brand/02.png";
import brand3 from "../../assets/brand/03.png";
import brand4 from "../../assets/brand/04.png";
import brand5 from "../../assets/brand/05.png";

export const Brand = () => {
  return (
    <div className="brandcontain">
      <img className="item" src={brand1} alt="brand1" />
      <img className="item" src={brand2} alt="brand2" />
      <img className="item" src={brand3} alt="brand3" />
      <img className="item" src={brand4} alt="brand4" />
      <img className="item" src={brand5} alt="brand5" />
    </div>
  );
};
