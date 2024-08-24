import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">


          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}

            className="primary-heading">
            ¡Bienvenido a Parque de Hamburguesas!
          </motion.h1>


          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}

            className="primary-text">
            Somos algo + que un deporte. 🍔
          </motion.p>

          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}

            className="secondary-button"
            onClick={() => {
              window.location.href = "https://wa.me/5493425785262";
            }}
          >
            Hace tu pedido <FiArrowRight />
          </motion.button>
        </div>

        <motion.div 
                  initial={{x:100, opacity: 0}}
                  animate={{x:0, opacity: 1}}
                  transition= {{duration: 1, delay: 1.2}}
        
        className="home-image-section">
          <img src={BannerImage} alt="Banner" className="banner-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
