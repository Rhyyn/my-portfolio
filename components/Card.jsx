import React from "react";
import projects from "../pages/projects";
import projectStyles from "../styles/Project.module.css";

const Card = (props) => {
  return (
    <div className={projectStyles.card}>
    <img src={props.project.image} className={projectStyles.image}/>
      <h1>{props.project.title}</h1>
      <p>{props.project.desc}</p>
    </div>
  );
};

export default Card;
