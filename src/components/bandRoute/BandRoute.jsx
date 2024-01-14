import React from "react";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import About from "./about/About";
import Contact from "./contact/Contact";

const BandRoute = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default BandRoute;
