import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import "./LowerNavigation.scss";
import { IoIosHome } from "react-icons/io";
import { MdOutlineContactMail } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";

const LowerNavigation = () => {

  return (
    <motion.section className="bottom-menu">
        <nav className="bottom-responsive-menu">
          <ul className="icon-list">
              <li className="icon">   
                  <Link to="/" >
                    <IoIosHome />
                  </Link>
              </li>
              <li className="icon">   
                  <Link to="business" >
                    <MdOutlineContactMail />
                  </Link>
              </li>
              <li className="icon">   
                  <Link to="videos" >
                    <PiVideoFill />
                  </Link>
              </li>
              <li className="icon">   
                  <Link to="gallery" >
                    <TfiGallery />
                  </Link>
              </li>
          </ul>
        </nav>
    </motion.section>
  )
}

export default LowerNavigation