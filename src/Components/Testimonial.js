import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import {motion } from "framer-motion"


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Ubicacion</p>
        <motion.h1
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{opacity: 0,  x: -100 }}
                          transition={{ duration: 1, }}
        
        className="primary-heading">Visitanos!</motion.h1>
        <motion.p 
        
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0,  x: -100 }}
        transition={{ duration: 1, }}
        
        className="primary-text">
        Te dejamos la ubicación de Parque padel & Parque de Hamburguesas para que pases a visitarnos.

        </motion.p>
      </div>
      <div className="testimonial-section-bottom">

        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423.0991947869894!2d-60.91928513046184!3d-31.966496832588323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5bfdbf81a15bb%3A0x323d99bedd82ab10!2sParque%20de%20hamburguesas!5e0!3m2!1ses!2sar!4v1724530143564!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Parque de Hamburguesas"
        ></iframe>
      </div>
      </div>
    </div>

    
  );
};

export default Testimonial;
