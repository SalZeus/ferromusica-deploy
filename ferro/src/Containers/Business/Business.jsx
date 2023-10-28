// import React from 'react'
import "./Business.scss"
import { motion } from 'framer-motion';
import { images } from '../../Constants';
import Contact from "../Contact/Contact";
import Piechart from "../../Components/Piechart/piechart.jsx";



const Business = () => {


  return (
    <>
      <motion.section className="business">
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
                <motion.button>Envianos un mensaje!</motion.button>
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
      <section>
        <Piechart />
      </section>
      <motion.section>
        <Contact />
      </motion.section>
    </>
  )
}

export default Business