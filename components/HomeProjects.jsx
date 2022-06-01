import React from 'react';
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMaterialui,
    SiNextdotjs
} from "react-icons/si";

const HomeProjects = () => {
    const advancedSkills = {
        skills: [
            {
                name: "TypeScript",
                icon: <SiTypescript size={30} color="#104d2b" />,
            },
            {
                name: "Javascript",
                icon: <SiJavascript size={30} color="#104d2b" />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 size={30} color="#104d2b" />,
            },
            {
                name: "CSS3",
                icon: <SiCss3 size={30} color="#104d2b" />,
            },
            {
                name: "MaterialUI",
                icon: <SiMaterialui size={30} color="#104d2b" />,
            },
            {
                name: "NextJs",
                icon: <SiNextdotjs size={30} color="#104d2b" />,
            },
        ],
    };

    const HomeSkillsDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
            marginBottom: "2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
            marginBottom: "2rem",
        },
        [theme.breakpoints.up("laptop")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
            marginBottom: "2rem",
        },
    }));
  return (
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
  )
}

export default HomeProjects