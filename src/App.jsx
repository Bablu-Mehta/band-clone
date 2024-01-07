import "./App.css";
import About from "./components/about/About.jsx";
import Booking from "./components/booking/Booking.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default App;
