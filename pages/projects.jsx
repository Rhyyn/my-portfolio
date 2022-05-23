import React from "react";
import homeStyles from "../styles/Home.module.css";
import projectStyles from "../styles/Project.module.css";
import Header from "../components/Header";
import Card from "../components/Card";

const projects = () => {
  const projectsList = {
    projects: [
      {
        title: "Portfolio",
        desc: "Portfolio I built with NextJs, contains my Skills, my Projects, a little bit About Me and a Contact form",
        image: "/portfolio04.png",
      },
      {
        title: "Lost Ark Wandering Merchant Tracker",
        desc: "Website used to track Merchants spawns in the game Lost Ark, available in US/EU/Asia, Possibility of activating sound reminders",
        image: "/loatracker.png",
      },
      {
        title: "Harry Potter character displayer",
        desc: "Website that pulls data from the Harry Potter API and display characters cards, Search and filter by Students/Houses/Teacher and more",
        image: "/portfolio04.png",
      },
      {
        title: "Harry Potter character displayer",
        desc: "Website that pulls data from the Harry Potter API and display characters cards, Search and filter by Students/Houses/Teacher and more",
        image: "/portfolio04.png",
      },
    ],
  };

  return (
    <div className={homeStyles.pageContainer}>
      <Header></Header>
      <div className={projectStyles.cardBox}>
        {projectsList.projects.map((project, index) => {
          return (
            <Card key={index} project={project}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default projects;
