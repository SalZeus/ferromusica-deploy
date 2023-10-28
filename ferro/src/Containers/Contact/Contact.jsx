// import React from 'react'
import "./Contact.scss"
import {AiOutlineWhatsApp} from "react-icons/ai";
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <section className='contact' id="contactanos">
      <div className='container'>
        <div className='invitation'>
            <h1>Nos encantaría conocerte!</h1>
            <p>Dale más emoción a tus eventos!</p>
        </div>
        <motion.div className='calltoaction'
          whileHover={{
            scale: 1.3,
            rotate: [-20, 20, -20, 0]
          }}
        >
          <h1>Envíanos un mensaje!</h1>
          <a 
          href="https://wa.me/+573013182183/?text=Quiero%20agendar%20un%20evento%20con%20Ferro,%20ayúdame,%20por%20favor">
            <AiOutlineWhatsApp 
            style={{
              width: "30%",
              height: "auto",
              color: "var(--black)"
            }}/>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact