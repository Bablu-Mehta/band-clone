import React from "react";
import "./about.css";
import TeamMember from "./TeamMember";
import johnDoe from "../../../assets/bandRoute/team2.jpg";
import janeDoe from "../../../assets/bandRoute/team1.jpg";
import mikeRoss from "../../../assets/bandRoute/team3.jpg";
import danStar from "../../../assets/bandRoute/team4.jpg";

const About = () => {
  return (
    <div className="band-about-container">
      <h1>About</h1>
      <div className="divider-line"></div>
      <p className="band-about-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="band-about-team">
        <TeamMember
          memberImage={johnDoe}
          memberName="John Doe"
          memberDesignation="CEO & Founder"
          memberDescription="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        />
        <TeamMember
          memberImage={janeDoe}
          memberName="Jane Doe"
          memberDesignation="Architect"
          memberDescription="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        />
        <TeamMember
          memberImage={mikeRoss}
          memberName="Mike Ross"
          memberDesignation="Architect"
          memberDescription="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        />
        <TeamMember
          memberImage={danStar}
          memberName="Dan Star"
          memberDesignation="Architect"
          memberDescription="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        />
      </div>
    </div>
  );
};

export default About;
