import React from "react";
import "./project.css";

const Project = ({ projectName, projectImage }) => {
  return (
    <div className="projects-project-container">
      <img src={projectImage} alt={projectName} />
      <p>{projectName}</p>
    </div>
  );
};

export default Project;
