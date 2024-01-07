import "./App.css";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import Booking from "./components/booking/Booking.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/band" element={<About />} />
        <Route path="/tour" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
