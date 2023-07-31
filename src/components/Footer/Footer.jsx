import React from "react";
import "./Footer.scss";
import payment from "../../assets/payment.png";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import logo from "../../assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <div className="footercontain">
      <div className="sec1back">
        <div className="sec1">
          <div className="left">
            <img src={logo} alt="logo" />
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="social">
              <TwitterIcon className="item item-tweet" />
              <FacebookIcon className="item item-facebook" />
              <LinkedInIcon className="item item-linkedin" />
              <InstagramIcon className="item item-insta" />
            </div>
          </div>
          <div className="center">
            <h1>ABOUT US</h1>
            <ul>
              <li>Our Producers</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="right">
            <h1>CUSTOMER SERVICES</h1>
            <ul>
              <li>Contact Us</li>
              <li>Track Your Order</li>
              <li>Product Care & Repair</li>
              <li>Terms & Conditions</li>
              <li>Shipping & Returnss</li>
            </ul>
          </div>
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
            <KeyboardArrowUpTwoToneIcon />
            scroll to top
          </div>
        </div>
      </div>
    </div>
  );
};
