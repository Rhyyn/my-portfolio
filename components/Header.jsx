import { React, useState } from "react";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { Box, Typography } from "@mui/material";
import logo from "../public/logoDeepGreen.png";
import { styled } from "@mui/material";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

const Header = () => {
    const HeaderComponent = styled("header")(({ theme }) => ({
        height: "60px",
        width: "100vw",
        maxWidth: '100%',
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: theme.palette.grey[50],
        // boxShadow: "0px 0px 6px -3px rgba(0,0,0,0.2),0px 0px 14px 1px rgba(0,0,0,0.14),0px 0px 18px 3px rgba(0,0,0,0.12)",
         // 2nd paramenet = 0px = y 
    }));
    return (
        <HeaderComponent>
            <NavBar></NavBar>
        </HeaderComponent>
    );
};

export default Header;
