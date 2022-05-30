import Head from "next/head";
import { useRouter } from "next/router";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import {
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiMaterialui,
    SiChakraui,
    SiSass,
} from "react-icons/si";
import { BiMailSend, BiFolderOpen, BiUserPin } from "react-icons/bi";
import { Box, Typography } from "@mui/material";
import { color, styled } from "@mui/system";

const Content = {
    en: {
        greeting: "Hello !", // h1
        intro: "My name is", // h3
        name: "Tony Migeon", // h3 + bold
        job: "Front End Developer", // h1
        library: "React", // h1 + more weigth
    },
    fr: {
        greeting: "Bonjour !",
        intro: "Moi c'est",
        name: "Tony Migeon",
        job: "Développeur Front End",
        library: "React",
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
        marginLeft: "4rem",
        paddingTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
    [theme.breakpoints.up("desktop")]: {
        marginLeft: "10rem",
    },
}));

export default function Home() {
    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { greeting, intro, name, job, library } = Content[locale];
    const advancedSkills = {
        skills: [
            {
                name: "TypeScript",
                icon: <SiTypescript size={30} className={homeStyles.icon} />,
            },
            {
                name: "Javascript",
                icon: <SiJavascript size={30} className={homeStyles.icon} />,
            },
            {
                name: "HTML5",
                icon: <SiHtml5 size={30} className={homeStyles.icon} />,
            },
            {
                name: "CSS3",
                icon: <SiCss3 size={30} className={homeStyles.icon} />,
            },
            {
                name: "Sass",
                icon: <SiSass size={30} className={homeStyles.icon} />,
            },
            {
                name: "Chakra-UI",
                icon: <SiChakraui size={30} className={homeStyles.icon} />,
            },
        ],
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/projects");
    };

    return (
        <div className={homeStyles.pageContainer}>
            <Head>
                <title>Tony Migeon Portfolio</title>
                <meta
                    name="Tony Migeon Web Dev Portfolio"
                    content="Portfolio of a React Developer created using NextJS / React / Material UI"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <HomeSection>
                <HomeGreetingDiv>
                    <Typography
                        variant="h1"
                        sx={{
                            color: { mobile: "primary.contrastText" },
                        }}
                    >
                        {greeting}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                marginRight: "0.7rem",
                                color: "primary.contrastText",
                                fontSize: { mobile: "1.5rem", tablet: "2rem" },
                            }}
                        >
                            {intro}
                        </Typography>
                        <Typography
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
                    <Box sx={{ display: "flex", flexDirection: 'column' }}>
                        <Typography
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
                            sx={{ fontWeight: "500", color: "primary.main", textAlign: 'center' }}
                        >
                            {library}
                        </Typography>
                    </Box>
                </HomeGreetingDiv>
            </HomeSection>
            {/* <section className={homeStyles.homeSection}>
                
            </section> */}
        </div>
    );
}

{
    /* <section className={homeStyles.ProjectsSection}>
<main>

</main>
</section>
<section className="aboutContactSection">
<main></main>
</section> */
}
