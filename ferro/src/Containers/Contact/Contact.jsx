// import React from 'react'
import "./Contact.scss"
import {AiOutlineWhatsApp} from "react-icons/ai";
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <motion.section className='contact' id="contactanos"
    animate={{ x: [-3000, 1000, -200, 0] }}>
      <div className='container'>
        <motion.div className='invitation'
          initial={{
            borderRadius: "0%", 
            background: "#000000",
            color: '#ffffff',
            boxShadow: 'none',
          }}
          whileHover={{
            borderRadius: "0% 100% 100% 0% / 50% 50% 50% 50% ",
            background: "var(--purple)",
            color: "#000000",
            x: [40, 0, 40, 0, 40, 0],
            zIndex: 5,
            boxShadow:"2px 2px 40px 20px var(--purple)",
          }}

        >
            <motion.h1 whileHover={{
              color: "rgb(251, 59,82)",
            }}>
              Nos encantaría conocerte!
            </motion.h1>
            <motion.p whileHover={{
              color: "rgb(251, 59,82)"
            }}>
              Dale más emoción a tus eventos!
            </motion.p>
        </motion.div>
        <a className="contact-link" href="https://wa.me/+573013182183/?text=Quiero%20agendar%20un%20evento%20con%20Ferro,%20ayúdame,%20por%20favor">
          <motion.div className='calltoaction'
            whileHover={{
              scale: 1.3,
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