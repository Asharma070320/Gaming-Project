import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="conditons_section">
        <div className="terms_condition">
          <a href="/terms-and-condtions" target="_blank">Terms and Conditions</a>
          <a href="/responsible-gaming" target="_blank">Responsible Gaming</a>
        </div>
        <div className="support">
          <p>24 X 7 Support</p>
          <div className="visibilty_hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
