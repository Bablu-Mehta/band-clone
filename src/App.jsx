import "./App.css";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import BandRoute from "./components/bandRoute/BandRoute.jsx";
import Blog from "./components/tourRoute/Blog.jsx";
import Catering from "./components/cateringRoute/Catering.jsx";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/band" element={<BandRoute />} />
    //     <Route path="/tour" element={<Blog />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <>
      <Catering />
    </>
  );
}

export default App;
