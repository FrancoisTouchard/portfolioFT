import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <nav className="footer">
      <div className="footer-description" onClick={() => navigate("/")}>
        <span className="footer-description-name">François Touchard</span>
        <span className="footer-description-job">Développeur front-end</span>
      </div>
    </nav >
  );
};

export default Footer;
