import { useState } from "react";
import './Carousel.scss'
import { AnimatePresence, motion } from 'framer-motion'

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

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === videos.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(videos.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <motion.section className='container' id="videos"
    whileInView={{y: -290,}}
    >
      <div className='slideshow'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            className='video-container'
            custom={direction}
            key={index}
          >
            <iframe
              width='100%' 
              height='100%'
              frameBorder="0"
              src={videos[index].videoUrl}
              title={videos[index].title}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </motion.div>
        </AnimatePresence>
        <button className='prevButton' onClick={prevStep}>
          ◀
        </button>
        <button className='nextButton' onClick={nextStep}>
          ▶
        </button>
      </div>
    </motion.section>
  );
}

export default Carousel;
