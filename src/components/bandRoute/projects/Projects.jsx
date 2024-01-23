import React from "react";
import Project from "./Project";
import "./projects.css";
import { bandRouteProjectData } from "../../../constants";

const Projects = () => {
  const projects = bandRouteProjectData.map((project) => (
    <Project
      key={project.id}
      projectImage={project.projectImage}
      projectName={project.projectName}
    />
  ));

  return (
    <div className="band-projects-container">
      <h1>Projects</h1>
      <section className="band-projects">{projects}</section>
    </div>
  );
};

export default Projects;
