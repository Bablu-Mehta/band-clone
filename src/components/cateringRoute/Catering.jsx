import React from "react";
import "./catering.css";
import heroImage from "../../assets/cateringRoute/hamburger.jpg";
import aboutImage from "../../assets/cateringRoute/about-img.jpg";

const Catering = () => {
  return (
    <div className="catering-container">
      <div className="catering__hero-section">
        <img src={heroImage} alt="Hamburger Image" />
        <p>Le Catering</p>
      </div>

      {/* =======About section ============== */}
      <div className="catering-about-section">
        <div className="catering-about__left">
          <img src={aboutImage} alt="Food Plates on Table" />
        </div>
        <div className="catering-about__right">
          <h1 className="catering-about__Heading">About Catering</h1>
          <p className="catering-about__subHeading">Tradition since 1889</p>
          <p className="catering-about__content-1">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span>seasonal</span> ingredients.
          </p>
          <p className="catering-about__content-2">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catering;
