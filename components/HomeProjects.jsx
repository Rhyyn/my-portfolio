import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMaterialui,
    SiNextdotjs,
    SiReact,
} from "react-icons/si";
import MyCard from "./Card";

const HomeProjects = () => {
    const advancedSkills = {
        skills: [
            {
                name: "TypeScript",
                icon: <SiTypescript size={30} color="#104d2b" />,
                mobileIcon: <SiTypescript size={20} color="#104d2b" />,
            },
            {
                name: "Javascript",
                icon: <SiJavascript size={30} color="#104d2b" />,
                mobileIcon: <SiJavascript size={20} color="#104d2b" />,
            },
            {
                name: "React",
                icon: <SiReact size={30} color="#104d2b" />,
                mobileIcon: <SiReact size={20} color="#104d2b" />,
            },
            {
                name: "CSS3",
                icon: <SiCss3 size={30} color="#104d2b" />,
                mobileIcon: <SiCss3 size={20} color="#104d2b" />,
            },
            {
                name: "MaterialUI",
                icon: <SiMaterialui size={30} color="#104d2b" />,
                mobileIcon: <SiMaterialui size={20} color="#104d2b" />,
            },
            {
                name: "NextJs",
                icon: <SiNextdotjs size={30} color="#104d2b" />,
                mobileIcon: <SiNextdotjs size={20} color="#104d2b" />,
            },
        ],
    };

    const Projects = {
        projects: [
            {
                name: "Harry Potter Character Displayer",
                image: "/HpDisplayer.png",
                description:
                    "Web App that pulls data from a public API then displays it, search by Name, Houses and more",
                repo: "https://github.com/Rhyyn/Harry-potter-character-displayer",
                demo: "http://harry-potter-character-displayer.vercel.app/"
            },
            {
                name: "Lost Ark Wandering Merchant Timer",
                image: "/LostArkTracker.png",
                description:
                    "Web App made to track Wandering Merchants timers in the game Lost Ark, avalaible for all Servers",
                repo: "https://github.com/Rhyyn/Rhyn-Lost-Ark-Wandering-Merchant_Tracker",
                demo: "https://lostark-merchant-tracker.netlify.app/"
            },
        ],
    };

    const HomeProjectsSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "100%",
        boxShadow: theme.shadows[24],
    }));

    const HomeSkillsDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
            marginBottom: "2rem",
            paddingTop: "2rem",
        },
    }));
    const HomeSkillsMobileDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "20rem",
            margin: "0 auto",
            marginBottom: "2rem",
            paddingTop: "2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            display: "none",
        },
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
            <HomeSkillsDiv>
                {advancedSkills.skills.map((skill, index) => {
                    // div for skills displays
                    return (
                        <Box
                            key={index}
                            sx={{
                                padding: "0 0.5rem",
                                textAlign: "center",
                                minWidth: "94px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "primary.main",
                                    fontWeight: "500",
                                }}
                            >
                                {skill.name}
                            </Typography>
                            {skill.icon}
                        </Box>
                    );
                })}
            </HomeSkillsDiv>
            <HomeSkillsMobileDiv>
                {advancedSkills.skills.map((skill, index) => {
                    // div for skills displays
                    return (
                        <Box
                            key={index}
                            sx={{
                                textAlign: "center",
                                minWidth: "94px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "primary.main",
                                    fontWeight: "500",
                                    fontSize: "0.8rem",
                                }}
                            >
                                {skill.name}
                            </Typography>
                            {skill.mobileIcon}
                        </Box>
                    );
                })}
            </HomeSkillsMobileDiv>
            <Typography variant="h5" sx={{textAlign: 'center', color: 'primary.main', fontWeight: '600'}}>My Projects</Typography>
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
