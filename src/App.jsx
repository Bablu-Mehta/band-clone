import "./App.css";
import About from "./components/about/About.jsx";
import Booking from "./components/booking/Booking.jsx";
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
      </div>
    </>
  );
}

export default App;
