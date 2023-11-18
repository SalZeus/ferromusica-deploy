// import React from 'react'
import "./Contact.scss"
import {AiOutlineWhatsApp} from "react-icons/ai";
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <motion.section className='contact' id="contactanos"
    animate={{ x: [-3000, 1000, -200, 0] }}>
      <div className='container'>

        <a className="contact-link" href="https://wa.me/+573013182183/?text=Quiero%20agendar%20un%20evento%20con%20Ferro,%20ayúdame,%20por%20favor">
          <motion.div className='calltoaction'
            whileHover={{
              scale: 0.9,
              rotate: [-20, 20, -20, 0],
              background: "var(--purple)",
              borderRadius: "40%",
            }} style={{background: "#ffffff"}}
          >
            <h1>Envíanos un mensaje!</h1>
              <AiOutlineWhatsApp 
              style={{
                width: "30%",
                height: "auto",
                color: "var(--black)"
              }}/>
          </motion.div>
        </a>
      </div>
    </motion.section>
  )
}

export default Contact