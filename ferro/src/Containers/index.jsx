import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);



// export {default as About} from "./About/About"
// export {default as Footer} from "./Footer/Footer"
// export {default as Header} from "./Header/Header"
// export {default as Hero} from "./Hero/Hero"
// export {default as Contact} from "./Contact/Contact"
// export {default as Carousel} from "./Carousel/Carousel"

