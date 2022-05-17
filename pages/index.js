import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import headerStyles from "../styles/Header.module.css";
import { BiMailSend } from "react-icons/bi";

export default function Home() {
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
            <h1 className={homeStyles.nameText}>Tony</h1>
            <h1 className={homeStyles.nameText}>Migeon</h1>
            <h3 className={homeStyles.jobText}>Front-end developper</h3>
            <h2 className={homeStyles.reactJobText}>React</h2>
          <div className={homeStyles.jobDescTextContainer}>
            <p className={homeStyles.jobDescText}>Currently looking for</p>
            <p className={homeStyles.jobDescText}>job opportunities</p>
          </div>
          <div className = {homeStyles.buttonContainer}>
            <span className = {homeStyles.button}>Projects</span>
            <span className = {homeStyles.button}>About Me</span>
          </div>
        </div>
      </main>
    </div>
  );
}
