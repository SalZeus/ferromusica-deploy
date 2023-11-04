import { motion } from 'framer-motion';
// import GalleryItems from "../../constants/GalleryImages";
import "./Gallery.scss"

function Gallery() {

    let cover = "https://i.imgur.com/3qVICyL.png";
    let foto1 = "https://i.imgur.com/LxnDXri.png";
    let foto2 = "https://i.imgur.com/1xJOlMb.png";
    let foto3 = "https://i.imgur.com/dR1iXTM.png";
    let foto4 = "https://i.imgur.com/aaNBrJG.png";
    let foto5 = "https://i.imgur.com/fO3WTHi.png";
    let foto6 = "https://i.imgur.com/Nq8R1Hi.png";
    let foto7 = "https://i.imgur.com/sSjsdvT.png";
    let foto8 = "https://i.imgur.com/YsNxQci.png";
    let foto9 = "https://i.imgur.com/TO6MQjl.png";
    let foto10=  "https://i.imgur.com/kPaIyMA.png";
    let foto11=  "https://i.imgur.com/HAkhfLF.png";
    let foto12=  "https://i.imgur.com/gK7XrAz.png";
    let foto13=  "https://i.imgur.com/NDPt7sY.png";
    let foto14=  "https://i.imgur.com/uw5VB8m.png";
    let foto15=  "https://i.imgur.com/2mlhd0v.png";
    let foto16=  "https://i.imgur.com/X7a1M1z.png";
    let foto17=  "https://i.imgur.com/6qf6oN1.png";
    let foto18=  "https://i.imgur.com/7i7AfnX.png";
    let foto19=  "https://i.imgur.com/4LHXITj.png";
    let foto20=  "https://i.imgur.com/rDOnBAK.png";
    let foto21=  "https://i.imgur.com/mXqvO5E.png";
    let foto22=  "https://i.imgur.com/BqvoT8e.png";
    let foto23=  "https://i.imgur.com/xIAWTuk.png";
    let foto24=  "https://i.imgur.com/mkukgU5.png";
    let foto25=  "https://i.imgur.com/z9jl8dh.png";
    let foto26=  "https://i.imgur.com/9THHbhi.png";
    let foto27=  "https://i.imgur.com/3TN3jJw.png";
    let foto28=  "https://i.imgur.com/xpOTnVV.png";
    let foto29=  "https://i.imgur.com/ieZSaaj.png";
    let foto30=  "https://i.imgur.com/2xqWJem.png";
    let foto31=  "https://i.imgur.com/zAZzPba.png";
    let foto32=  "https://i.imgur.com/v0kB2Ok.png";
    let foto33=  "https://i.imgur.com/oZJTL0o.png";
    let foto34=  "https://i.imgur.com/qdVTnwl.png";
    let foto35=  "https://i.imgur.com/33g4PAJ.png";



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