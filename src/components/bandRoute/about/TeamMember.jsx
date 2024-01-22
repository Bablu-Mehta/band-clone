import React from "react";
import "./teamMember.css";
const TeamMember = ({
  memberImage,
  memberName,
  memberDesignation,
  memberDescription,
  handleClick
}) => {
  return (
    <div className="band-about-member-card">
      <img src={memberImage} alt={memberName} />
      <h3>{memberName}</h3>
      <p className="member-designation">{memberDesignation}</p>
      <p className="member-description">{memberDescription}</p>
      <button onClick={handleClick}>Contact</button>
    </div>
  );
};

export default TeamMember;
