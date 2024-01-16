import React from "react";
import "./catering.css";
import heroImage from "../../assets/cateringRoute/hamburger.jpg";
import aboutImage from "../../assets/cateringRoute/about-img.jpg";
import dishImage from "../../assets/cateringRoute/dishImage.jpg";

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

      {/* ======================Menu section============ */}

      <div className="menu-container">
        <div className="menu__left">
          <h1>Our Menu</h1>
          <div className="menu__dish">
            <p className="menu__dish-name">Bread Basket</p>
            <p className="menu__dish-description">
              Assortment of fresh baked fruit breads and muffins 5.50
            </p>
          </div>

          <div className="menu__dish">
            <p className="menu__dish-name">Honey Almond Granola with Fruits</p>
            <p className="menu__dish-description">
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
          </div>
          <div className="menu__dish">
            <p className="menu__dish-name">Belgian Waffle</p>
            <p className="menu__dish-description">
              Vanilla flavored batter with malted flour 7.50
            </p>
          </div>
          <div className="menu__dish">
            <p className="menu__dish-name">Scrambled eggs</p>
            <p className="menu__dish-description">
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
          </div>
          <div className="menu__dish">
            <p className="menu__dish-name">Blueberry Pancakes</p>
            <p className="menu__dish-description">
              With syrup, butter and lots of berries 8.50
            </p>
          </div>
        </div>
        <div className="menu__right">
          <img src={dishImage} alt="image of dish" />
        </div>
      </div>
    </div>
  );
};

export default Catering;
