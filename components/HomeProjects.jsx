import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import MyCard from "./Card";

const HomeProjects = () => {


    const Projects = {
        projects: [
            {
                name: "Harry Potter Character Displayer",
                image: "/HpDisplayer.png",
                description:
                    "Web App that pulls data from a public API then displays it, search by Name, Houses and more",
                repo: "https://github.com/Rhyyn/Harry-potter-character-displayer",
                demo: "http://harry-potter-character-displayer.vercel.app/",
            },
            {
                name: "Lost Ark Wandering Merchant Timer",
                image: "/LostArkTracker.png",
                description:
                    "Web App made to track Wandering Merchants timers in the game Lost Ark, available for all Servers",
                repo: "https://github.com/Rhyyn/Rhyn-Lost-Ark-Wandering-Merchant_Tracker",
                demo: "https://lostark-merchant-tracker.netlify.app/",
            },
        ],
    };

    const HomeProjectsSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "100%",
        backgroundColor: "#fcfcfc",  
        boxShadow:
            "0px 17px 6px -3px rgba(0,0,0,0.2),0px 17px 14px 1px rgba(0,0,0,0.14),0px 17px 18px 3px rgba(0,0,0,0.12)", // 17px = y
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: '3rem'
    }));

    const HomeProjectDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "90vw",
            margin: "0 auto",
        },
        [theme.breakpoints.up("tablet")]: {
            flexDirection: "row",
            maxWidth: "70vw",
        },
    }));
    return (
        <HomeProjectsSection>
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    color: "secondary.main",
                    fontWeight: "700",
                    fontSize: "2rem",
                    paddingBottom: '2rem'
                }}
            >
                My Projects
            </Typography>
            
            <HomeProjectDiv>
                {Projects.projects.map((project, index) => {
                    return (
                        <MyCard
                            key={index}
                            name={project.name}
                            image={project.image}
                            desc={project.description}
                            repo={project.repo}
                            demo={project.demo}
                        ></MyCard>
                    );
                })}
            </HomeProjectDiv>
        </HomeProjectsSection>
    );
};

export default HomeProjects;
