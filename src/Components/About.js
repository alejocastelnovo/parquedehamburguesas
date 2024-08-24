import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {<img src={AboutBackground} alt="" />}
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Background" className="about-background-image" />
      </motion.div>


      <div className="about-section-text-container">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{opacity: 0,  x: -100 }}
          transition={{ duration: 1, }}
          className="primary-heading">
          Las mejores burgers de la zona
        </motion.h1>

        <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{opacity: 0,  x: -100 }}
                  transition={{ duration: 1, }}
                  className="primary-text">

          <p className="primary-subheading">Parque de Hamburguesas</p> Nació con la necesidad de una opción económica en tiempos de pandemia. Cada detalle fue pensado como único, logrando un sabor especial.
        </motion.p>

        <motion.p 
        

        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0,  x: -100 }}
        transition={{ duration: 1, }}
        
        className="primary-text">
          Hoy en dia somos lo que somos gracias a todos ustedes, muchas gracias por acompañarnos!
        </motion.p>
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
