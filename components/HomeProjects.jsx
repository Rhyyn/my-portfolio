import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import MyCard from "./Card";
import { useRouter } from "next/router";

const HomeProjects = () => {

    const Content = {
        en: {
            sectionTitle: "My Projects",
            
        },
        fr: {
            sectionTitle: "Mes Projets",
            
        },
    };
    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { sectionTitle } =
        Content[locale];

    const Projects = {
        projects: [
            {
                englishName: "Harry Potter Character Displayer",
                frenchName: "Librairie des personnages de Harry Potter",
                image: "/HpDisplayer.png",
                englishDescription:
                    "Site fetching data from a public API, then sorting them by characters, user can search by Name, Houses etc..",
                repo: "https://github.com/Rhyyn/Harry-potter-character-displayer",
                frenchDescription:
                    "Site prenant des données d'une API publique, puis les tris par personnages, possibilité de chercher par Nom, Maisons etc..",
                demo: "http://harry-potter-character-displayer.vercel.app/",
            },
            {
                englishName: "Lost Ark Wandering Merchant Timer",
                frenchName: "Lost Ark chronomètre pour Marchants errants",
                image: "/LostArkTracker.png",
                englishDescription:
                    "Web App made to track Wandering Merchants timers in the game Lost Ark, available for all Servers.",
                frenchDescription:
                    "Application faite pour suivre l'apparition de Marchants errants sur le jeu Lost Ark, disponible pour tous les serveurs.",
                repo: "https://github.com/Rhyyn/Rhyn-Lost-Ark-Wandering-Merchant_Tracker",
                demo: "https://lostark-merchant-tracker.netlify.app/",
            },
        ],
    };

    const HomeProjectsSection = styled("section")(({ theme }) => ({
        width: "100vw",
        maxWidth: "100%",
        margin: "0 auto",
        height: "100%",
        backgroundColor: "#fcfcfc",
        // boxShadow:
        //     "0px 17px 6px -3px rgba(0,0,0,0.2),0px 17px 14px 1px rgba(0,0,0,0.14),0px 17px 18px 3px rgba(0,0,0,0.12)",
        // 17px = y
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "3rem",
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
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    color: "secondary.main",
                    fontWeight: "700",
                    fontSize: "2rem",
                    paddingBottom: "2rem",
                }}
            >
                {sectionTitle}
            </Typography>

            <HomeProjectDiv>
                {Projects.projects.map((project, index) => {
                    return <MyCard key={index} project={project}></MyCard>;
                })}
            </HomeProjectDiv>
        </HomeProjectsSection>
    );
};

export default HomeProjects;
