import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "../styles/Header.module.css";
import LanguageSwitch from "./LanguageSwitch";
import { Container, Box } from "@mui/material";
import logo from "../public/logoDeepGreen.png";

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <Container
                disableGutters={true}
                maxWidth="false"
                sx={{ paddingRight: "0" }}
            >
                <Box sx={{ height: "20px", bgcolor: "primary.main" }}></Box>
                <Box sx={{ height: "40px", bgcolor: "#fff" }}>
                    <Image src={logo}></Image>
                </Box>
            </Container>
        </header>
    );
};

export default Header;
