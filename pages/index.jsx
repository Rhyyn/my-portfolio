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
import { Box } from "@mui/material";
import waveBackground from "../public/Rectangle14.png";

const Content = {
    en: {
        jobText: "Front End developper",
        jobDescText: "Open to Remote Jobs Offers.",
        jobDescText2: "Job opportunities.",
        button1: "Projects",
        button2: "About Me",
    },
    fr: {
        jobText: "Développeur Front End",
        jobDescText: "Ouvert aux offres en télétravail.",
        jobDescText2: "d'opportunités d'emplois.",
        button1: "Projets",
        button2: "Profil",
    },
};

export default function Home() {
    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { jobText, jobDescText, jobDescText2, button1, button2 } =
        Content[locale];
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
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <section className={homeStyles.homeSection}>
                <main>
                    <Box sx={{minWidth: '100vw'}} className = {homeStyles.imageContainer}>
                        {/* <Image src={waveBackground} className = {homeStyles.image} /> */}
                    </Box>
                </main>
            </section>
            <section className={homeStyles.ProjectsSection}>
                <main>
                    {/* <Box sx={{minWidth: '100vw'}} className = {homeStyles.projectsContainer}>
                        
                    </Box> */}
                </main>
            </section>
            <section className="aboutContactSection">
                <main></main>
            </section>
        </div>
    );
}
