import React from "react";
import img from "../../../assets/bandRoute/architect.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="band-hero-container">
      <div className="band-hero-image-container">
        <img src={img} alt="image of building" />
        <div className="band-hero-heading">
          <span>BR</span>
          <p>Architect</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
