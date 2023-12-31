import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Gallery from "./Containers/Gallery/Gallery.jsx";
import VideoGallery from "./Containers/VideoGallery/VideoGallery.jsx";
import Business from "./Containers/Business/Business"
import NoPage from "./Components/NoPage/NoPage"
import './App.scss'
import LowerNavigation from "./Components/LowerNavigation/LowerNavigation.jsx";
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/videos" element={<VideoGallery />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <LowerNavigation />
    </BrowserRouter>
  )
}

export default App
