// import React from 'react';
import "./Header.scss"
import { AiOutlineClose } from "react-icons/ai";
import { images } from '../../Constants';
import { motion} from "framer-motion";
import { useState } from 'react';
import {AiFillInstagram, AiFillYoutube, AiOutlineWhatsApp} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Layout = () => {
 const [toggle, setToggle] = useState(false)

 const svgVariants ={
    hidden: {
        rotate: 360
    },
    visible:{
        rotate: 0, 
        transition:{
            duration: 3,
            yoyo: Infinity,
        }
    },
    dragConstraints:{
        top: 30, 
        bottom: 30, 
        left: 30, 
        right: 30,
    }
  }

  const gVariants={
    hidden:{
        pathLength: 0, 
        opacity: 1,
    },
    visible:{

    }
  }

  

  const pathVariants={
    hidden: {
        pathLength: 0, 
        opacity: 1
    },
    visible:{
        pathLength: 1, 
        transition:{
            duration: 3,
        }
    }
  }

  const links = [
    {
        link: "",
        title: "home"
    },
    {
        link: "business",
        title: "Contactanos"
    },
    {
        link: "videos",
        title: "Videos"
    },
    {
        link: "gallery",
        title: "Galeria"
    },
  ]

  return (
    <motion.nav className='navbar'
    initial={{y: -250}}
    animate={{scale: 1.1, y: -1}}
    >
        <div className='link-container'>
            <ul className='navbar-links'>
                {links.map(({title, link}) =>(
                    <li key={`link-${title}`}>   
                        <Link to={`/${link}`} >{title}</Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className='social-media' size={55}>
            {/* <AiFillFire/> */}
            {/* <AiFillFacebook/> */}
            <a href="https://www.instagram.com/ferromusica/?hl=es">
                <AiFillInstagram/>
            </a>
            <a href="https://www.youtube.com/channel/UCmzhZY8tDbkE0hXQ6BnI2Pw">
                <AiFillYoutube/>
            </a>
            <a href="https://www.tiktok.com/@ferromusica">
                <FaTiktok/>
            </a>
            <a href="https://wa.me/+573013182183/?text=Quiero%20agendar%20un%20evento%20con%20Ferro,%20ayúdame,%20por%20favor">
                <AiOutlineWhatsApp/>
            </a>
        </div>
        {/* <img className="navbar-logo"src={images.svglogo} alt="logo" /> */}
        <a href="#contactanos">
            <motion.svg 
                viewBox="0 0 24 24" 
                width="150px"
                height="150px"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                drag
                dragConstraints="dragConstraints"
                dragElastic={0.9}
            >
                <motion.g id="SVGRepo_bgCarrier" 
                    strokeWidth="0"
                    variants={gVariants}
                    initial="hidden"
                    animate="visible"
                    
                ></motion.g>
                <motion.g id="SVGRepo_tracerCarrier" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    variants={gVariants}
                    initial="hidden"
                    animate="visible"
                ></motion.g>
                <motion.g id="SVGRepo_iconCarrier"> 
                    <motion.path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00004 13.6569 9.00004 12C9.00004 10.3432 10.3432 9.00004 12 9.00004C13.6569 9.00004 15 10.3432 15 12Z" 
                        stroke="#c22424" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                    >
                    </motion.path> 
                    <motion.path d="M7.64338 5.18899L7.56701 6.10541C7.52707 6.58478 7.50709 6.82447 7.40373 7.01167C7.31261 7.1767 7.1767 7.31261 7.01167 7.40373C6.82447 7.50709 6.58477 7.52707 6.10541 7.56701L5.18898 7.64338C4.16259 7.72892 3.6494 7.77168 3.39642 8.00615C3.17627 8.21018 3.05941 8.50232 3.07812 8.8019C3.09961 9.14615 3.44174 9.53105 4.126 10.3008L4.69153 10.9371C5.02586 11.3132 5.19302 11.5012 5.2565 11.7135C5.31243 11.9004 5.31243 12.0997 5.2565 12.2866C5.19302 12.4988 5.02586 12.6869 4.69153 13.063L4.126 13.6992C3.44174 14.469 3.09961 14.8539 3.07812 15.1982C3.05941 15.4978 3.17627 15.7899 3.39642 15.9939C3.6494 16.2284 4.16259 16.2712 5.18899 16.3567L6.10541 16.4331C6.58478 16.473 6.82446 16.493 7.01167 16.5964C7.1767 16.6875 7.31261 16.8234 7.40373 16.9884C7.50709 17.1756 7.52707 17.4153 7.56701 17.8947L7.64338 18.8111C7.72892 19.8375 7.77168 20.3507 8.00615 20.6037C8.21018 20.8238 8.50232 20.9407 8.8019 20.922C9.14615 20.9005 9.53105 20.5583 10.3008 19.8741L10.9371 19.3085C11.3132 18.9742 11.5012 18.8071 11.7135 18.7436C11.9004 18.6876 12.0997 18.6876 12.2866 18.7436C12.4988 18.8071 12.6869 18.9742 13.063 19.3085L13.6992 19.8741C14.469 20.5583 14.8539 20.9005 15.1982 20.922C15.4978 20.9407 15.7899 20.8238 15.9939 20.6037C16.2284 20.3507 16.2712 19.8375 16.3567 18.8111L16.4331 17.8947C16.473 17.4153 16.493 17.1756 16.5964 16.9884C16.6875 16.8234 16.8234 16.6875 16.9884 16.5964C17.1756 16.493 17.4153 16.473 17.8947 16.4331L18.8111 16.3567C19.8375 16.2712 20.3507 16.2284 20.6037 15.9939C20.8238 15.7899 20.9407 15.4978 20.922 15.1982C20.9005 14.8539 20.5583 14.469 19.8741 13.6992L19.3085 13.063C18.9742 12.6869 18.8071 12.4988 18.7436 12.2866C18.6876 12.0997 18.6876 11.9004 18.7436 11.7135C18.8071 11.5012 18.9742 11.3132 19.3085 10.9371L19.8741 10.3008C20.5583 9.53105 20.9005 9.14615 20.922 8.8019C20.9407 8.50232 20.8238 8.21018 20.6037 8.00615C20.3507 7.77168 19.8375 7.72892 18.8111 7.64338L17.8947 7.56701C17.4153 7.52707 17.1756 7.50709 16.9884 7.40373C16.8234 7.31261 16.6875 7.1767 16.5964 7.01167C16.493 6.82446 16.473 6.58478 16.4331 6.10541L16.3567 5.18898C16.2712 4.16259 16.2284 3.6494 15.9939 3.39642C15.7899 3.17627 15.4978 3.05941 15.1982 3.07812C14.8539 3.09961 14.469 3.44174 13.6992 4.126L13.063 4.69153C12.6869 5.02586 12.4988 5.19302 12.2866 5.2565C12.0997 5.31243 11.9004 5.31243 11.7135 5.2565C11.5012 5.19302 11.3132 5.02586 10.9371 4.69153L10.3008 4.126C9.53105 3.44174 9.14615 3.09961 8.8019 3.07812C8.50232 3.05941 8.21018 3.17627 8.00615 3.39642C7.77168 3.6494 7.72892 4.16259 7.64338 5.18899Z" 
                        stroke="#c22424" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        variants={pathVariants}
                        initial="hidden"
                        animate="visible"
                    ></motion.path> 
                </motion.g>
            </motion.svg>
        </a>

        <div className='navbar-menu'>
            <img src={images.menu} onClick={()=>setToggle(true)} alt="Navbar toggle"/>
            {toggle &&(
            <motion.div
                whileInView={{x: [300, 0]}}
                transition={{duration: 0.85, ease: "easeOut"}}
            >
                <AiOutlineClose size={55}  onClick={()=>setToggle(false)} />
                <ul className='menu-links'>
                    {["home", "videos", "contactanos"].map((item) =>(
                        <li className="navbar-link" key={item}>
                            <a href={`#${item}`} onClick={()=>setToggle(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            )}
        </div>
    </motion.nav>
  )
}

export default Layout