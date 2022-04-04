import React, { Fragment } from "react";
import projectList from "../data/project-data";
import Tilt from "react-tilt";

// Project Card Component
const Project = (props) => {
  // Accessing props object via dot/bracket notation
  return (
    <div className="card">
      <div className="card_content">
        <h3>{props.projectName}</h3>
        <a
          href={props.siteLink}
          target="_blank"
          rel="noreferrer"
          className="prj-img"
        >
          <Tilt className="Tilt" options={{ scale: 1 }}>
            <img src={props.img} alt={"Project #" + props.id}></img>
          </Tilt>
        </a>
        <p className="lang">
          [ <i>{props.tools}</i> ]
        </p>
        <p>- {props.description[0]}</p>
        <p>- {props.description[1]}</p>
      </div>

      <div className="card_info">
        <a href={props.repoLink} target="_blank" rel="noreferrer">
          <button className="button prj-button">💾 Git Repository</button>
        </a>
      </div>
    </div>
  );
};

// Projects showcase Page Component
const Projects = () => {
  return (
    <Fragment>
      <div className="grid-box">
        <div className="random">
          <h1>PROJECTS</h1>
        </div>
        <div className="prj_showcase">
          {projectList.map((project) => (
            <Project
              projectName={project.projectName}
              img={project.img}
              tools={project.tools}
              description={project.description}
              repoLink={project.repoLink}
              siteLink={project.siteLink}
              id={project.id}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
