import React from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { Box } from "@mui/material";
import logo from "../public/logoDeepGreen.png";
import { styled } from "@mui/material";

const Header = () => {
    const HeaderComponent = styled("header")(({ theme }) => ({
        margin: "0",
    }));

    const HeaderContentComponent = styled("div")(({ theme }) => ({
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.grey[100],
        [theme.breakpoints.up("mobile")]: {
            paddingRight: "2rem",
            paddingLeft: "2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            paddingRight: "4rem",
            paddingLeft: "4rem",
        },
        [theme.breakpoints.up("desktop")]: {
            paddingRight: "6rem",
            paddingLeft: "6rem",
        },
    }));
    return (
        <HeaderComponent>
                <Box sx={{ height: "10px", bgcolor: "primary.main" }}></Box>
                <HeaderContentComponent>
                    <Image src={logo}></Image>
                    <LanguageSwitch></LanguageSwitch>
                </HeaderContentComponent>

        </HeaderComponent>
    );
};

export default Header;
