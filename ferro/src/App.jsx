import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Containers/Home/Home"
import Gallery from "./Containers/Gallery/Gallery"
import './App.scss'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/gallery" element={<Gallery />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
