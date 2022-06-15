import { React, useState, useEffect } from "react";
import Link from "next/link";
import { styled, shadows } from "@mui/system";
import { useRouter } from "next/router";
import { Typography, Box, Button } from "@mui/material";
import { BsFileArrowDown } from "react-icons/bs";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMaterialui,
    SiNextdotjs,
    SiReact,
    SiGithub,
    SiLinkedin,
} from "react-icons/si";

const HomeMain = () => {
    const [hoverColorLink, setHoverColorLink] = useState("#104d2b");
    const [hoverColorGit, setHoverColorGit] = useState("#104d2b");
    const [isWindowScrolled, setIsWindowScrolled] = useState(false);
    const [arrowClass, setArrowClass] = useState("bounce");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsWindowScrolled(true);
            setArrowClass("hidden");
        } else {
            setIsWindowScrolled(false);
            setArrowClass("bounce");
        }
    };
    const Content = {
        en: {
            greeting: "Hello,", // h1
            intro: "I'm Tony Migeon", // h3
            name: "Tony Migeon", // h3 + bold
            job: "A Front End Developer", // h1
            library:
                "Currently using React as my main library, I'm looking for Remote Job Opportunities.", // h1 + more weigth
            projects: "Projects",
            aboutme: "About Me",
            contact: "Contact",
        },
        fr: {
            greeting: "Bonjour",
            intro: "Moi c'est Tony Migeon",
            name: "Tony Migeon",
            job: "Développeur Front End",
            library:
                "Ma Librairie principale est React, je suis actuellement en recherche d'offres en télétravail.",
            projects: "Projets",
            aboutme: "Profil",
            contact: "Contact",
        },
    };
    const advancedSkills = {
        skills: [
            {
                name: "TypeScript",
                icon: <SiTypescript size={30} color="#104d2b" />,
                mobileIcon: <SiTypescript size={25} color="#104d2b" />,
            },
            {
                name: "Javascript",
                icon: <SiJavascript size={30} color="#104d2b" />,
                mobileIcon: <SiJavascript size={25} color="#104d2b" />,
            },
            {
                name: "React",
                icon: <SiReact size={30} color="#104d2b" />,
                mobileIcon: <SiReact size={25} color="#104d2b" />,
            },
            {
                name: "CSS3",
                icon: <SiCss3 size={30} color="#104d2b" />,
                mobileIcon: <SiCss3 size={25} color="#104d2b" />,
            },
            {
                name: "MaterialUI",
                icon: <SiMaterialui size={30} color="#104d2b" />,
                mobileIcon: <SiMaterialui size={25} color="#104d2b" />,
            },
            {
                name: "NextJs",
                icon: <SiNextdotjs size={30} color="#104d2b" />,
                mobileIcon: <SiNextdotjs size={25} color="#104d2b" />,
            },
        ],
    };

    const HomeIntroSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "calc(100vh - 60px)",
        backgroundColor: "#fff",
        boxShadow: theme.shadows[10],
        // background: `url(/wavyBackground.png)`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "75%",
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
        },
    }));
    const HomeSkillsMobileDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.up("mobile")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "20rem",
            margin: "0 auto",
            marginBottom: "4rem",
            paddingTop: "2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            display: "none",
        },
    }));

    const HomeGreetingDiv = styled("div")(({ theme }) => ({
        // boxShadow: theme.shadows[6],
        // background: "rgb(43,204,115)",
        // background:
        //     "linear-gradient(180deg, rgba(43,204,115,1) 0%, rgba(108,213,155,1) 100%)",
        backgroundImage: "url(backgroundClouds02.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        [theme.breakpoints.up("mobile")]: {
            // height: "40%",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.up("tablet")]: {
            // height: "40%",
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
        marginBottom: "2rem",
        marginTop: "4rem",
    }));

    const SvgTrees = styled("div")(({ theme }) => ({
        // styling of background SVG trees
        [theme.breakpoints.up("mobile")]: {
            maxWidth: "50px",
            position: "relative",
            top: "393px",
            left: "10px",
        },
        [theme.breakpoints.up("tablet")]: {
            maxWidth: "50px",
            position: "relative",
            top: "393px",
            left: "70px",
        },
        [theme.breakpoints.up("desktop")]: {
            maxWidth: "50px",
            position: "relative",
            top: "393px",
            left: "8%",
        },
    }));

    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { greeting, intro, name, job, library, projects, aboutme, contact } =
        Content[locale];

    return (
        <HomeIntroSection>
            <HomeGreetingDiv>
                {/* <SvgTrees>
                    <img
                        width="100%"
                        src="/pine-tree.svg"
                        className="pineTree"
                    />
                </SvgTrees> */}

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "380px",
                        paddingTop: '5rem'
                    }}
                >
                    <Typography // gretting text
                        variant="h4"
                        sx={{
                            color: { mobile: "secondary.main" },
                            fontSize: { mobile: "2.3rem", tablet: "3rem" },
                            verticalAlign: "middle",
                            fontWeight: "600",
                        }}
                    >
                        {greeting}
                    </Typography>
                    <Typography // intro text
                        variant="h4"
                        sx={{
                            color: "secondary.main",
                            fontSize: { mobile: "1.5rem", tablet: "2rem" },
                            fontWeight: "600",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        {intro}
                    </Typography>
                    <Typography // job text
                        variant="h4"
                        sx={{
                            color: "secondary.main",
                            fontWeight: "500",
                            fontSize: { mobile: "1.5rem", tablet: "2rem" },
                            marginBottom: "1rem",
                            fontWeight: "700",
                        }}
                    >
                        {job}
                    </Typography>
                    <Typography // library text
                        variant="subtitle2"
                        sx={{
                            fontWeight: "600",
                            fontSize: { mobile: "0.9rem" },
                            color: "secondary.main",
                            maxWidth: "17rem",
                            textAlign: "center",
                        }}
                    >
                        {library}
                    </Typography>
                    <HomeButtonDiv>
                        <Link href="/contact">
                            <Button // project redirect button
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    margin: "0 1rem 0 1rem",
                                    height: "40px",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    minWidth: "113px",
                                    borderRadius: "20px",
                                }}
                            >
                                {contact}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button // project redirect button
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText",
                                    margin: "0 1rem 0 1rem",
                                    height: "40px",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    minWidth: "113px",
                                    borderRadius: "20px",
                                }}
                            >
                                {aboutme}
                            </Button>
                        </Link>
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
                                            color: "secondary.main",
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
                                        padding: "0.2rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "secondary.main",
                                            fontWeight: "500",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {skill.name}
                                    </Typography>
                                    {skill.mobileIcon}
                                </Box>
                            );
                        })}
                    </HomeSkillsMobileDiv>
                    <Box
                        sx={{ padding: "1rem", height: "70px" }}
                        className={arrowClass}
                    >
                        <BsFileArrowDown size={30} />
                    </Box>
                </Box>
            </HomeGreetingDiv>
        </HomeIntroSection>
    );
};

export default HomeMain;
