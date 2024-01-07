import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <FaFacebookSquare className="social" />
        <FaGithubSquare className="social" />
        <FaTwitterSquare className="social" />
        <FaPinterestSquare className="social" />
        <FaLinkedin className="social" />
        <FaInstagramSquare className="social" />
      </div>
      <div className="footer-heading">
        <p>
          Powered By <a href="#">w3.css</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
