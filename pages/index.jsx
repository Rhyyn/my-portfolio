import Head from "next/head";
import { useRouter } from "next/router";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/Header";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiChakraui,
  SiSass,
} from "react-icons/si";

const Content = {
  en: {
    jobText: "Front End developper",
    jobDescText: "Currently looking for",
    jobDescText2: "Job opportunities.",
    button1: "Projects",
    button2: "About Me",
  },
  fr: {
    jobText: "Développeur Front End",
    jobDescText: "Actuellement à la recherche",
    jobDescText2: "D'offres d'emplois.",
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
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Chakra-UI", icon: <SiChakraui /> },
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//db.onlinewebfonts.com/c/0801c08e5412f54e4b4e9ad146d83a12?family=Ink+Free"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <main>
        <div className={homeStyles.mainContainer}>
          <h1 className={homeStyles.nameText}>Tony Migeon</h1>
          <h3 className={homeStyles.jobText}>{jobText}</h3>
          <h2 className={homeStyles.reactJobText}>React</h2>
          <div className={homeStyles.jobDescTextContainer}>
            <p className={homeStyles.jobDescText}>{jobDescText}</p>
            <p className={homeStyles.jobDescText}>{jobDescText2}</p>
          </div>
          <div className={homeStyles.skills}>
            {advancedSkills.skills.map((skill, index) => {
              return (
                <div key={index} className={homeStyles.singleSkillContainer}>
                  <h4 className={homeStyles.advancedSkills}>{skill.name}</h4>
                  {skill.icon}
                </div>
              );
            })}
          </div>
          <div className={homeStyles.buttonContainer}>
            <button className={homeStyles.button} onClick={handleClick}>
              {button1}
            </button>
            <button className={homeStyles.button}>{button2}</button>
          </div>
        </div>
      </main>
    </div>
  );
}
