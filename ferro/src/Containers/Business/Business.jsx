// import React from 'react'
import "./Business.scss"
import { motion } from 'framer-motion';
import images  from '../../../public/Constants/Images.js';
import Contact from "../Contact/Contact";
import Piechart from "../../Components/Piechart/piechart.jsx";



const Business = () => {


  return (
    <>
      <motion.section animate={{ x: [-3000, 1000, -200, 0] }}
      className="business">
        <motion.h1 className="title">Veamonos!</motion.h1>
        <motion.div className="hero-container">
          <motion.div className="hero-announcement">
            <div className="announcement-left">
              <motion.h1>
                Estoy emocionado por colaborar <br /> 
                y asistir a tus eventos
              </motion.h1>
              <motion.h2>
                La vida es una, y estamos a un mensaje de estar juntos!
              </motion.h2>
              <a className="mensaje" href="#contactanos">
                <motion.button
                whileHover={{ scale: [1.3, 1.4, 2, 1.4, 1.6, 1.2] }}
                initial={{scale: 1}}
                >
                  Envianos un mensaje!
                </motion.button>
              </a>
            </div>
            <div className="announcement-right">
            <motion.div className="hero-image">
            <img src={images.ferroai} alt="Ferro imagen en inteligencia artificial" />
          </motion.div>
            </div>
          </motion.div>
          
        </motion.div>
        
      </motion.section>
      <motion.section
      animate={{ x: [-3000, 1000, -200, 0] }}>
        <Piechart />
      </motion.section>
      <motion.section
      animate={{ x: [-3000, 1000, -200, 0] }}>
        <Contact />
      </motion.section>
    </>
  )
}

export default Business