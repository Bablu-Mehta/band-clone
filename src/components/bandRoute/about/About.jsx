import React from "react";
import "./about.css";
import TeamMember from "./TeamMember";
import { memberData } from "../../../constants";

const About = () => {
  function handleClick() {
    console.log("clicked");
  }
  const teamMemberListUi = memberData.map((member) => (
    <TeamMember
      key={member.id}
      memberImage={member.memberImage}
      memberName={member.memberName}
      memberDesignation={member.memberDesignation}
      memberDescription={member.memberDescription}
      handleClick={handleClick}
    />
  ));
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
      <div className="band-about-team">{teamMemberListUi}</div>
    </div>
  );
};

export default About;
