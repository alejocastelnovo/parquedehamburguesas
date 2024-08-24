import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¡Bienvenido a Parque de Hamburguesas!
          </h1>
          <p className="primary-text">
            Somos algo + que un deporte. 🍔
          </p>
          <button
            className="secondary-button"
            onClick={() => {
              window.location.href = "https://wa.me/5493425785262";
            }}
          >
            Hace tu pedido <FiArrowRight />
          </button>

        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" className="banner-image" />

        </div>
      </div>
    </div>
  );
};

export default Home;
