import React from "react";
import "./member.css";

const Member = ({ memberName, memberImg }) => {
  return (
    <div className="member-card">
      <p className="name">{memberName}</p>
      <img src={memberImg} alt={memberName}/>
    </div>
  );
};

export default Member;
