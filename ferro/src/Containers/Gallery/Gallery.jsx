import { motion } from 'framer-motion';
import GalleryItems from "../../constants/GalleryImages";
import "./Gallery.scss"

function Gallery() {

    const imageArray = Object.values(GalleryItems);


    return(

        <motion.section className="gallery" id="galeria"
        animate={{ x: [0, 100, 0] }}
        >
            <motion.div className="container"
                animate={{ x: [0, 100, 0] }}
            >
                <motion.h1 animate={{ x: [0, 100, 0] }}>Te comparto algunas de mis fotos</motion.h1>
                <motion.div className="image-container"
                    animate={{ x: [0, 100, 0] }}
                >
                    {imageArray.map((image, index) => (
                            <motion.div className="image" key={index}
                                whileHover={{
                                    scale: 3,
                                    border: "10px",
                                    transition: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileInView={{opacity: 1}}
                            >
                                <img src={image} alt={`${image} from gallery`} />
                            </motion.div>
                        ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Gallery;