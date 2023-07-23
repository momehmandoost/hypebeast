import React from "react";
import "./Footer.scss";
import payment from "../../assets/payment.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Footer = () => {
  return (
    <div className="footercontain">
      <div className="sec1back">
        <div className="sec1">
          <div className="left">left</div>
          <div className="center">center</div>
          <div className="right">right</div>
        </div>
      </div>
      <div className="sec2back">
        <div className="sec2">
          <div className="left">
            © 2022 Hypebeast , Made by 🤍 Momehmandoost.
          </div>
          <div className="center">
            <img src={payment} alt="payment_icons" />
          </div>
          <div className="right">
            <ArrowUpwardIcon />
            scroll to top
          </div>
        </div>
      </div>
    </div>
  );
};
