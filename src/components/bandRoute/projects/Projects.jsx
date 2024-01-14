import React from "react";
import Project from "./Project";
import "./projects.css";
import summerHouse1 from "../../../assets/bandRoute/house5.jpg";
import summerHouse2 from "../../../assets/bandRoute/house5.jpg";
import brickHouse1 from "../../../assets/bandRoute/house2.jpg";
import brickHouse2 from "../../../assets/bandRoute/house2.jpg";
import renovated1 from "../../../assets/bandRoute/house3.jpg";
import renovated2 from "../../../assets/bandRoute/house3.jpg";
import barnHouse1 from "../../../assets/bandRoute/house4.jpg";
import barnHouse2 from "../../../assets/bandRoute/house4.jpg";

const Projects = () => {
  return (
    <div className="band-projects-container">
      <h1>Projects</h1>
      <section className="band-projects">
        <Project projectImage={summerHouse1} projectName="Summer House" />
        <Project projectImage={brickHouse1} projectName="Brick House" />
        <Project projectImage={renovated1} projectName="Renovated" />
        <Project projectImage={barnHouse1} projectName="Barn House" />
        <Project projectImage={summerHouse2} projectName="Summer House" />
        <Project projectImage={brickHouse2} projectName="Brick House" />
        <Project projectImage={renovated2} projectName="Renovated" />
        <Project projectImage={barnHouse2} projectName="Barn House" />
      </section>
    </div>
  );
};

export default Projects;
