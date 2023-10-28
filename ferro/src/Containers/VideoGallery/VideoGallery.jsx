import { motion } from 'framer-motion';
// import GalleryItems from "../../Constants/Images";
import "./VideoGallery.scss"

function VideoGallery() {

    // const imageArray = Object.values(GalleryItems);

    const videos = [
        {
          title: 'MIRAME OTRA VEZ',
          description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
          videoUrl: 'https://www.youtube.com/embed/pvdZY4DbcHg?si=5N9v2qOjBUKmipOW',
        },
        {
          title: 'CLANDESTINO',
          description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
          videoUrl: 'https://www.youtube.com/embed/_1zwWmC1G4Q?si=OHNpwnJUKOEtwOYM',
        },
        {
          title: 'HOY NO',
          description: 'Disfrutemos de momentos juntos! Estamos a mensaje de distancia!',
          videoUrl: 'https://www.youtube.com/embed/3vUxRmhIljs?si=R1JgDequdZbYaTdW',
        },
        {
          title: 'SECRETO',
          description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
          videoUrl: 'https://www.youtube.com/embed/vB8I-2uYd3o?si=PEddyQoq8pWkGhCX',
        },
      ];

    return(

        <motion.section className="gallery" id="galeria"
        animate={{ x: [0, 100, 0] }}
        
        >
            <motion.div className="container"
                animate={{ x: [0, 100, 0] }}
            >
                <motion.h1 animate={{ x: [0, 100, 0] }}>Algunos de mis videos!</motion.h1>
                <motion.div className="image-container"
                    animate={{ x: [0, 100, 0] }}
                >
                    {videos.map((video, index) => (
                        <motion.div className="image" key={index}
                            whileHover={{
                                scale: 1.1,
                                border: "10px",
                                transition: {
                                    duration: .3,
                                    ease: "easeInOut"
                                }
                            }}
                            whileInView={{opacity: 1}}
                        >
                            <iframe
                                key={`video number ${index}`}
                                width='100%'
                                height='100%'
                                frameBorder="0"
                                src={video.videoUrl} // Access videoUrl property from the video object
                                title={video.title} // Access title property from the video object
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                            <p>{video.description}</p> {/* Access description property from the video object */}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default VideoGallery;