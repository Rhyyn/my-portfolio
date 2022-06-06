import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";

const contact = () => {

    const MyIntroSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "calc(100vh - 60px)",
        boxShadow: theme.shadows[24],
        backgroundColor: 'primary.main',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const MyContainer = styled("div")(({ theme }) => ({
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: "80vw",
        height: "80vh",
    }));

    const MyAboutMe = styled("div")(({ theme }) => ({
        width: "100%",
        backgroundColor: "#104d2b",
    }));

    const MyContact = styled("div")(({ theme }) => ({
        width: "100%",
        backgroundColor: "#cc2b84",
    }));
    return (
        <Box sx={{ backgroundColor: "#e9e9e9" }}>
            <Header></Header>
            <MyIntroSection>
                <MyContainer>
                    <Paper sx={{ width: '90%', height: '90%', backgroundColor: 'primary.main'}} elevation={3}>
                        <MyAboutMe></MyAboutMe>
                        <MyContact></MyContact>
                    </Paper>
                </MyContainer>
            </MyIntroSection>
        </Box>
    );
};

export default contact;
