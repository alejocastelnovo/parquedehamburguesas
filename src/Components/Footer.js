import React from "react";
import Logo from "../Assets/logo.jpg";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-logo-container">
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/ParqueDeHamburguesas" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/parquedehamburguesas?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="https://wa.me/5493425785262" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </a>
        </div>
        <div className="footer-contact">


          <span>castelnovo12@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
