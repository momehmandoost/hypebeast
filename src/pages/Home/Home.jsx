import React from "react";
import "./Home.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import tophome from "../../assets/tophome.png";

export const Home = () => {
  return (
    <div className="homecontain">
      <div className="home">
        <div className="left">

            <h2>Collections</h2>
            <p>
              you can explore ans shop many differnt collection from various
              barands here.
            </p>
            <div className="button">
              <ShoppingCartIcon />
              Shop Now
            </div>

        </div>
        <div className="right">
          <img src={tophome} alt="shop" />
        </div>
      </div>
    </div>
  );
};
