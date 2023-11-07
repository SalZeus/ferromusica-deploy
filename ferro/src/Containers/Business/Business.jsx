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
        <motion.h1 className="title"
        initial={{
          opacity: 0,
          y: 500,
        }}
        animate={{
          opacity: [0, 1],
          y: [-400, 0],
          transition: { duration: .8 },
        }}
       
        ><motion.a  whileHover={{
          color: [ "#ffffff","var(--purple)"]
        }} href="#contactanos">Veamonos!</motion.a></motion.h1>
        <motion.div className="hero-container"
        whileHover={{
          scale: 1.1
        }}>
          <motion.div className="hero-announcement"
          initial={{
            background: "rgba(255, 255, 255, 0.484)",
          }}
          whileHover={{
            background: "#000000"
          }}
          >
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
                whileHover={{ scale: [1.3, 1.4, 2, 1.4, 1.6, 1.2, 1], background: ["rgb(78, 0, 247)", "rgb(51, 121, 64)"], color: "#000000" }}
                initial={{scale: 1, color: "#ffffff"}}
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