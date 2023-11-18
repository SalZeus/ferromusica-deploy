import "./Home.scss"
import images from "../../../public/Constants/Images"
import { motion } from 'framer-motion'
import Carousel from "../Carousel/Carousel"
import Contact from "../Contact/Contact"

const Home = () => {

  const containerVariants={
    hidden:{
      y: -750,
    }, 
    visible:{
      y: 0,
      x: 0,
    },
    animate:{
      x: [-80, 80, -80],
      y: [0, -45, 0],
      transition:{
        x: {
          repeat: Infinity,
          duration: 0.6
        },
         y: {
          repeat: Infinity,
          duration: 0.3,
          ease: "easeOut"
       }
      }
    }
  }

  return (
    <>
    <div className='hero' id="home">
      {/* <video className="blooper" autoPlay controls muted>
        <source src="../../assets/bloopers.m4v" type='video/m4v' />
        Your browser does not support the video tag.

      </video> */}
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="animate"
      className='main-logo'>
      <a href="#contactanos">
        <img src={images.horizontallogo} alt="" />
      </a>
      </motion.div>
      <div className='hero-image'>
        <video src={images.blooper} muted autoPlay loop alt="cover" />
      </div>
    </div>
    <section style={{marginBottom: "20px"}}>
      <Carousel />
    </section>
    <motion.h1 className="calling" style={{marginTop: "60px", marginBottom: "0"}}>
      Procura pasarte por nuestro whatsapp! Estaremos felices de reicbirte!
    </motion.h1>
    <section>
      <Contact />
    </section>
  </>
  )
}

export default Home