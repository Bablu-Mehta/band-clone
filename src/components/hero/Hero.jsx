import React from "react";
import "./hero.css";

import HeroImg from "../../assets/hero-img.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="img-conatiner">
        <img src={HeroImg} alt="Crowd of people at Club" />
        <div className="hero-content">
          <h3>New York</h3>
          <p>The Atmosphere here at New York is lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
