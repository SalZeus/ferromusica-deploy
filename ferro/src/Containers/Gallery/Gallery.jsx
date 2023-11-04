import { motion } from 'framer-motion';
// import GalleryItems from "../../constants/GalleryImages";
import "./Gallery.scss"

function Gallery() {

    let cover = "../../assets/cover.png";
    let foto1 = "../../assets/foto1.png";
    let foto2 = "../../assets/foto2.png";
    let foto3 = "../../assets/foto3.png";
    let foto4 = "../../assets/foto4.png";
    let foto5 = "../../assets/foto5.png";
    let foto6 = "../../assets/foto6.png";
    let foto7 = "../../assets/foto7.png";
    let foto8 = "../../assets/foto8.png";
    let foto9 = "../../assets/foto9.png";
    let foto10=  "../../assets/foto10.png";
    let foto11=  "../../assets/foto11.png";
    let foto12=  "../../assets/foto12.png";
    let foto13=  "../../assets/foto13.png";
    let foto14=  "../../assets/foto14.png";
    let foto15=  "../../assets/foto15.png";
    let foto16=  "../../assets/foto16.png";
    let foto17=  "../../assets/foto17.png";
    let foto18=  "../../assets/foto18.png";
    let foto19=  "../../assets/foto19.png";
    let foto20=  "../../assets/foto20.png";
    let foto21=  "../../assets/foto21.png";
    let foto22=  "../../assets/foto22.png";
    let foto23=  "../../assets/foto23.png";
    let foto24=  "../../assets/foto24.png";
    let foto25=  "../../assets/foto25.png";
    let foto26=  "../../assets/foto26.png";
    let foto27=  "../../assets/foto27.png";
    let foto28=  "../../assets/foto28.png";
    let foto29=  "../../assets/foto29.png";
    let foto30=  "../../assets/foto30.png";
    let foto31=  "../../assets/foto31.png";
    let foto32=  "../../assets/foto32.png";
    let foto33=  "../../assets/foto33.png";
    let foto34=  "../../assets/foto34.png";
    let foto35=  "../../assets/foto35.png";



    const GalleryItems = {

    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    cover,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27,
    foto28,
    foto29,
    foto30,
    foto31,
    foto32,
    foto33,
    foto34,
    foto35,
    }

    const imageArray = Object.values(GalleryItems);


    return(

        <motion.section className="gallery" id="galeria"
        animate={{ x: [-3000, 1000, -200, 0] }}
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
                                    // x: "calc(100vw - 50%)",
                                    // y: "calc(100vw - 50%)",
                                    zIndex: 99,
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