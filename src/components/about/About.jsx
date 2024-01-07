import React from "react";
import "./about.css";
import Member from "./Member";
import MemberImg from "../../assets/member.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>The Band</h1>
        <h4>We love music</h4>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="member-section">
        <Member memberImg={MemberImg} memberName="Name" />
        <Member memberImg={MemberImg} memberName="Name" />
        <Member memberImg={MemberImg} memberName="Name" />
      </div>
    </div>
  );
};

export default About;
