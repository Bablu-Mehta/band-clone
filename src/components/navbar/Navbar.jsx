import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="menu-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/band">Band</Link>
        </li>
        <li>
          <Link to="/tour">Tour</Link>
        </li>
        <li>
          <Link to="/catering">Catering Services</Link>
        </li>
        <li>
          <Link to="/stop-watch">Stop Watch</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        {/* <li>
         <a href="#">More</a>
         <ul className="dropdown">
            <li>Merchandise</li>
            <li>Merchandise</li>
            <li>Merchandise</li>
         </ul>
        </li> */}
      </ul>
      <div className="search-icon">
        <FaSearch />
      </div>
    </nav>
  );
};

export default Navbar;
