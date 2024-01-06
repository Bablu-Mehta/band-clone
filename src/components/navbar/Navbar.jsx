import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="menu-list">
        <li>Home</li>
        <li>Band</li>
        <li>Tour</li>
        <li>Contact</li>
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
