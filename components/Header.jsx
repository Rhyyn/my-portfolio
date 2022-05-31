import { React, useState } from "react";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { Box, Typography } from "@mui/material";
import logo from "../public/logoDeepGreen.png";
import { styled } from "@mui/material";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

const Header = () => {
    const NavbarContent = {
        en: {
            home: "Home",
            project: "Projects",
            aboutme: "About Me",
            contact: "Contact",
        },
        fr: {
            home: "Home",
            project: "Projets",
            aboutme: "Profil",
            contact: "Contact",
        },
    };
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { home, project, aboutme, contact, content } = NavbarContent[locale];
    const HeaderComponent = styled("header")(({ theme }) => ({
        height: "60px",
        width: "90vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.shadows[24],
    }));

    const HeaderContentComponent = styled("div")(({ theme }) => ({
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.grey[100],
        [theme.breakpoints.up("mobile")]: {
            margin: "0 2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            margin: "0 4rem",
        },
        [theme.breakpoints.up("desktop")]: {
            margin: "0 20rem",
        },
    }));

    return (
        <HeaderComponent>
            {locale === "en"
                ? Object.keys(NavbarContent.en).map((item, index) => {
                      return (
                          <Typography
                              key={index}
                              variant="subtitle1"
                              sx={{
                                  padding: "1rem",
                                  cursor: "pointer",
                                  color: "primary.main",
                              }}
                          >
                              {NavbarContent.en[item]}
                          </Typography>
                      );
                  })
                : Object.keys(NavbarContent.fr).map((item, index) => {
                      return (
                          <Typography
                              key={index}
                              variant="subtitle1"
                              sx={{
                                  padding: "1rem",
                                  cursor: "pointer",
                                  color: "primary.main",
                              }}
                          >
                              {NavbarContent.fr[item]}
                          </Typography>
                      );
                  })}
            <LanguageSwitch></LanguageSwitch>
        </HeaderComponent>
    );
};

export default Header;
