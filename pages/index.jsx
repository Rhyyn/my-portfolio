import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import homeStyles from "../styles/Home.module.css";
import headerStyles from "../styles/Header.module.css";
import { BiMailSend } from "react-icons/bi";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiChakraui,
} from "react-icons/si";

export default function Home() {
  const router = useRouter();
  const advancedSkills = {
    skills: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Javascript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Material-UI", icon: <SiMaterialui /> },
      { name: "Chakra-UI", icon: <SiChakraui /> },
    ],
  };

  const handleClick = e => {
    e.preventDefault()
    router.push('/projects')
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
      <header className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <img
            className={headerStyles.logo}
            alt="logo.png"
            src="/logo.png"
          ></img>
          <span className={headerStyles.contactText}>
            Contact
            <BiMailSend className={headerStyles.contactLogo} size={25} />
          </span>
        </div>
      </header>
      <main>
        <div className={homeStyles.mainContainer}>
          <h1 className={homeStyles.nameText}>Tony Migeon</h1>
          <h3 className={homeStyles.jobText}>Front-end developper</h3>
          <h2 className={homeStyles.reactJobText}>React</h2>
          <div className={homeStyles.jobDescTextContainer}>
            <p className={homeStyles.jobDescText}>Currently looking for</p>
            <p className={homeStyles.jobDescText}>job opportunities</p>
          </div>
          <div className={homeStyles.skills}>
            {advancedSkills.skills.map((skill, index) => {
              return (
                <div className={homeStyles.singleSkillContainer}>
                  <h4 className={homeStyles.advancedSkills}>{skill.name}</h4>
                  {skill.icon}
                </div>
              );
            })}
          </div>
          <div className={homeStyles.buttonContainer}>
            <button className={homeStyles.button} onClick={handleClick}>Projects</button>
            <button className={homeStyles.button}>About Me</button>
          </div>
        </div>
      </main>
    </div>
  );
}
