import React from "react";
import projects from "../pages/projects";
import projectStyles from "../styles/Project.module.css";

const Card = (props) => {
  return (
    <div className={projectStyles.card}>
      <div className = {projectStyles.imageContainer}>
        <img src={props.project.image} className={projectStyles.image} />
      </div>
      <div className = {projectStyles.textContainer}>
        <h1>{props.project.title}</h1>
        <p>{props.project.desc}</p>
        <button>Visit Website</button>
        <button>View Source Code</button>
      </div>
    </div>
  );
};

export default Card;
