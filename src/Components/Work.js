import React from "react";

import Chiquita from "../Assets/chiquita.png"
import Bandeja from "../Assets/bandeja.png"
import Smash from "../Assets/smash.png"
import Volea from "../Assets/volea.png"
import { motion } from "framer-motion";


const Work = () => {
  const workInfoData = [
    {
      image: Chiquita,
      title: "Chiquita",
      text: "Medallon de carne (170g), Cheddar, Cebolla krispy y Ketchup.",
    },
    {
      image: Bandeja,
      title: "Bandeja",
      text: "Medallon de carne (170g), Cheddar, Tomate, Cebolla Caramelizada y Ketchup.",
    },
    {
      image: Volea,
      title: "Volea",
      text: "Medallon de carne (170g), Cheddar, Vegetales Asados, Rúcula y Salsa Alioli",
    },
    {
      image: Smash,
      title: "Smash",
      text: "Medallon de carne (170g), Panceta, Muzzarella, Lechuga, Cebolla Brunuase y Ketchup",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <motion.h1

          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, }}

          className="primary-heading">Nuestras variedades</motion.h1>
        <motion.p

          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, }} className="primary-text">
          Algunas de las opciones que ofrecemos, todas vienen con papas!
        </motion.p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (


          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
