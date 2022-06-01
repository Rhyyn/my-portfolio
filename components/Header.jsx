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
        width: "90vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.grey[50],
        boxShadow: theme.shadows[24],
    }));
    return (
        <HeaderComponent>
            <NavBar></NavBar>
        </HeaderComponent>
    );
};

export default Header;
