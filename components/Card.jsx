import React from 'react'
import Image from "next/image";
import projects from '../pages/projects'
import projectStyles from '../styles/Project.module.css'

const Card = (props) => {
    console.log(props.project.image);
  return (
    <div className = {projectStyles.cardContainer}>
        <h3>{props.project.title}</h3>
        <p>{props.project.desc}</p>
        {/* <Image src={props.project.image} width={50} height={50}></Image> */}

    </div>
  )
}

export default Card