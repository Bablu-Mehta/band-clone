import React from "react";
import "./catering.css";
import heroImage from "../../assets/cateringRoute/hamburger.jpg";

const Catering = () => {
  return (
    <div className="catering-container">
      <div className="catering__hero-section">
        <img src={heroImage} alt="Hamburger Image" />
        <p>Le Catering</p>
      </div>
    </div>
  );
};

export default Catering;
