import {motion} from "framer-motion";
import "./NoPage.scss"

const NoPage = () => {

    return(
      <motion.section className="no-page">
        <div>
          <img 
            src="https://cdn.leonardo.ai/users/8ff7428e-3e09-42d4-a347-a18df560113e/generations/89d02f16-a57a-45ac-9ce8-b50c1cec3746/variations/Default_In_the_inky_blackness_of_space_the_silhouette_of_a_sol_1_89d02f16-a57a-45ac-9ce8-b50c1cec3746_0.png" 
            alt="Imagen de fondo" 
          />
        </div>
        <motion.h1 className="main-advise">
          Diantres Batman, <br></br>
          aqui no hay nada :(<br></br>
        </motion.h1>

        <motion.p className="direction">
          Peeeero, intenta ir al home!
          <br></br> ↑Justo aca arriba ↑
        </motion.p>
      </motion.section>
    );
  };
  
  export default NoPage;