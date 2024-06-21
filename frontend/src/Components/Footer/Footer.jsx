import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            mollitia enim tempore atque harum tenetur, voluptatem aperiam
            doloribus adipisci voluptatum nulla vero quo quidem necessitatibus,
            a modi deleniti accusantium fuga facilis dignissimos eaque
            temporibus! Impedit laboriosam perferendis hic, rem quas dolores
            officia quibusdam perspiciatis dicta dolorum corporis ut asperiores
            aut.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-8567</li>
            <li>contact@foodZap.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © foodZap.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
