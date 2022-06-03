import React from "react";
import Link from "next/link";
import { styled, shadows } from "@mui/system";
import { useRouter } from "next/router";
import { Typography, Box, Button } from "@mui/material";
import {
    SiGithub,
    SiLinkedin,
} from "react-icons/si";

const HomeMain = () => {
    const Content = {
        en: {
            greeting: "Hello,", // h1
            intro: "I'm Tony Migeon", // h3
            name: "Tony Migeon", // h3 + bold
            job: "I'm a Front End Developer", // h1
            library:
                "Currently using React as my main library, I'm looking for Remote Job Opportunities.", // h1 + more weigth
            projects: "Projects",
            aboutme: "About Me",
            contact: "Contact",
        },
        fr: {
            greeting: "Bonjour",
            intro: "Moi c'est",
            name: "Tony Migeon",
            job: "Développeur Front End",
            library: "React",
            projects: "Projets",
            aboutme: "Profil",
            contact: "Contact",
        },
    };

    const HomeIntroSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "100%",
        boxShadow: theme.shadows[24],
        // background: `url(/wavyBackground.png)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "75%",
    }));

    const HomeGreetingDiv = styled("div")(({ theme }) => ({
        boxShadow: theme.shadows[6],
        background: "rgb(43,204,115)",
        background:
            "linear-gradient(180deg, rgba(43,204,115,1) 0%, rgba(108,213,155,1) 100%)",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("mobile")]: {
            height: "40%",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.up("tablet")]: {
            height: "40%",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.up("desktop")]: {
            display: "flex",
            flexDirection: "column",
        },
    }));

    const HomeButtonDiv = styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
    }));

    

    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { greeting, intro, name, job, library, projects, aboutme, contact } =
        Content[locale];
    
    return (
        <HomeIntroSection>
            <HomeGreetingDiv>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Typography // gretting text
                        variant="h1"
                        sx={{
                            color: { mobile: "primary.contrastText" },
                            fontSize: { mobile: "2.3rem", tablet: "3rem" },
                            verticalAlign: "middle",
                            textShadow: "1px 1px 2px rgba(150, 150, 150, 1)",
                        }}
                    >
                        {greeting}
                    </Typography>
                    <Box sx={{}}>
                        <Typography // intro text
                            variant="h4"
                            sx={{
                                color: "primary.contrastText",
                                fontSize: { mobile: "1.5rem", tablet: "2rem" },
                                paddingTop: { mobile: "11px", tablet: "14px" },
                                paddingLeft: "1rem",
                                textShadow:
                                    "1px 1px 2px rgba(150, 150, 150, 1)",
                            }}
                        >
                            {intro}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography // job text
                        variant="h2"
                        sx={{
                            color: "primary.main",
                            fontWeight: "500",
                            fontSize: { mobile: "1.5rem", tablet: "2rem" },
                            marginBottom: "1rem",
                            marginTop: "0.7rem",
                        }}
                    >
                        {job}
                    </Typography>
                    <Typography // library text
                        variant="subtitle2"
                        sx={{
                            fontWeight: "600",
                            fontSize: { mobile: "0.9rem" },
                            color: "primary.contrastText",
                            maxWidth: "20rem",
                            textAlign: "center",
                            textShadow: "1px 1px 2px rgba(150, 150, 150, 1)",
                        }}
                    >
                        {library}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            minWidth: "230px",
                            justifyContent: 'center',
                            padding: '1rem 0 1rem 0'
                        }}
                    >
                        <Box sx={{ minWidth: '83px', margin: '0 1rem 0 1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main'}}>LinkedIn</Typography>
                            <Link href="https://www.linkedin.com/in/tony-migeon-1303b1222/">
                                <a>
                                    <SiLinkedin size={30} color="#104d2b" />
                                </a>
                            </Link>
                        </Box>
                        <Box sx={{ minWidth: '83px', margin: '0 1rem 0 1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main'}}>Github</Typography>
                            <Link href="https://github.com/Rhyyn">
                                <a>
                                    <SiGithub size={30} color="#104d2b" />
                                </a>
                            </Link>
                        </Box>
                    </Box>
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
                            {contact}
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
                            {aboutme}
                        </Button>
                    </HomeButtonDiv>
                </Box>
            </HomeGreetingDiv>
        </HomeIntroSection>
    );
};

export default HomeMain;
