import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
{        <img src={AboutBackground} alt="" />}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Background" className="about-background-image" />

      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Las mejores burgers de la zona
        </h1>
        <p className="primary-text">
          <p className="primary-subheading">Parque de Hamburguesas</p> Nació con la necesidad de una opción económica en tiempos de pandemia.
          Cada detalle fue pensado como único, logrando un sabor especial.
        </p>

        <p className="primary-text">
          Hoy en dia somos lo que somos gracias a todos ustedes, muchas gracias por acompañarnos!
        </p>
        <div className="about-buttons-container">

          <a href="https://www.instagram.com/p/Cdg5EhgDEoo/" target="_blank" rel="noopener noreferrer">
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Mira nuestros Reels!
            </button>
          </a>



        </div>
      </div>
    </div>
  );
};

export default About;
