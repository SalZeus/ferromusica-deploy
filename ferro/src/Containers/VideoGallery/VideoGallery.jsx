import { motion } from 'framer-motion';
// import GalleryItems from "../../Constants/Images";
import "./VideoGallery.scss"
import Carousel from '../Carousel/Carousel';

function VideoGallery() {

    // const imageArray = Object.values(GalleryItems);

    // const videos = [
    //     {
    //       title: 'MIRAME OTRA VEZ',
    //       description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
    //       videoUrl: 'https://www.youtube.com/embed/pvdZY4DbcHg?si=5N9v2qOjBUKmipOW',
    //     },
    //     {
    //       title: 'CLANDESTINO',
    //       description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
    //       videoUrl: 'https://www.youtube.com/embed/_1zwWmC1G4Q?si=OHNpwnJUKOEtwOYM',
    //     },
    //     {
    //       title: 'HOY NO',
    //       description: 'Disfrutemos de momentos juntos! Estamos a mensaje de distancia!',
    //       videoUrl: 'https://www.youtube.com/embed/3vUxRmhIljs?si=R1JgDequdZbYaTdW',
    //     },
    //     {
    //       title: 'SECRETO',
    //       description: 'Disfrutemos de momentos juntos! Estamos a un mensaje de distancia!',
    //       videoUrl: 'https://www.youtube.com/embed/vB8I-2uYd3o?si=PEddyQoq8pWkGhCX',
    //     },
    //   ];

    return(

        <motion.section className="gallery" id="galeria"
        animate={{ x: [-4000, 1000, -200, 0] }} style={{marginTop: "500px"}}
        
        >
            <Carousel />
        </motion.section>
    )
}

export default VideoGallery;