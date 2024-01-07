import React from "react";
import About from "./components/about/About.jsx";
import Booking from "./components/booking/Booking.jsx";
import Hero from "./components/hero/Hero.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Booking />
    </>
  );
};

export default Home;
