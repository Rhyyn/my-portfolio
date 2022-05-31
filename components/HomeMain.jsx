import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { Typography, Box, Button } from "@mui/material";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMaterialui,
    SiNextdotjs,
} from "react-icons/si";

const HomeMain = () => {
    const Content = {
        en: {
            greeting: "Hello !", // h1
            intro: "My name is", // h3
            name: "Tony Migeon", // h3 + bold
            job: "Front End Developer", // h1
            library: "React", // h1 + more weigth
            projects: "Projects",
            aboutme: "About Me",
            contact: "Contact",
        },
        fr: {
            greeting: "Bonjour !",
            intro: "Moi c'est",
            name: "Tony Migeon",
            job: "Développeur Front End",
            library: "React",
            projects: "Projets",
            aboutme: "Profil",
            contact: "Contact",
        },
    };

    const HomeSection = styled("section")({
        minWidth: "100vw",
        height: "calc(100vh - 60px)",
        background: `url(/wavyBackground.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "75%",
    });

    const HomeGreetingDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.up("tablet")]: {
            paddingTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.up("desktop")]: {
            paddingTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    }));

    const HomeGlobalFooterDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "fixed",
            bottom: "10px",
            marginBottom: "0.5rem",
        },
        [theme.breakpoints.up("tablet")]: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "fixed",
            bottom: "10px",
            marginBottom: "0.5rem",
        },
        [theme.breakpoints.up("laptop")]: {
            width: "100vw",
            height: "37%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
        },
    }));

    const HomeButtonDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.4rem",
        },
        [theme.breakpoints.up("tablet")]: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.4rem",
        },
        [theme.breakpoints.up("laptop")]: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.4rem",
        },
    }));

    const HomeSkillsDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        [theme.breakpoints.up("tablet")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "90%",
            margin: "0 auto",
        },
        [theme.breakpoints.up("laptop")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "25rem",
            margin: "0 auto",
        },
    }));

    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { greeting, intro, name, job, library, projects, aboutme, contact } =
        Content[locale];
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
    return (
        <HomeSection>
            <HomeGreetingDiv>
                <Typography // gretting text
                    variant="h1"
                    sx={{
                        color: { mobile: "primary.contrastText" },
                    }}
                >
                    {greeting}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography // intro text
                        variant="h4"
                        sx={{
                            marginRight: "0.7rem",
                            color: "primary.contrastText",
                            fontSize: { mobile: "1.5rem", tablet: "2rem" },
                        }}
                    >
                        {intro}
                    </Typography>
                    <Typography // name text
                        variant="h4"
                        sx={{
                            color: "primary.contrastText",
                            fontWeight: "500",
                            paddingBottom: "1.2rem",
                            fontSize: { mobile: "1.5rem", tablet: "2rem" },
                        }}
                    >
                        {name}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography // job text
                        variant="h2"
                        sx={{
                            color: "primary.main",
                            fontWeight: "400",
                            fontSize: { mobile: "2rem", tablet: "3rem" },
                        }}
                    >
                        {job}
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "500",
                            color: "primary.main",
                            textAlign: "center",
                        }}
                    >
                        {library}
                    </Typography>
                </Box>
                <Button // project redirect button
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "secondary.contrastText",
                        minWidth: "83px",
                    }}
                >
                    {projects}
                </Button>
            </HomeGreetingDiv>
            <HomeGlobalFooterDiv>
                <HomeButtonDiv>
                    <Button // project redirect button
                        sx={{
                            backgroundColor: "secondary.main",
                            color: "secondary.contrastText",
                            margin: "0 1rem 0 1rem",
                            height: "30px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            minWidth: "83px",
                        }}
                    >
                        {aboutme}
                    </Button>
                    <Button // project redirect button
                        sx={{
                            backgroundColor: "secondary.main",
                            color: "secondary.contrastText",
                            margin: "0 1rem 0 1rem",
                            height: "30px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            minWidth: "83px",
                        }}
                    >
                        {contact}
                    </Button>
                </HomeButtonDiv>
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
            </HomeGlobalFooterDiv>
        </HomeSection>
    );
};

export default HomeMain;
