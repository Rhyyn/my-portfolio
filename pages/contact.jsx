import { Box } from "@mui/system";
import React from "react";
import Header from "../components/Header";
import { styled } from "@mui/system";

const contact = () => {
    const HomeIntroSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        height: "calc(100vh - 60px)",
        boxShadow: theme.shadows[24],
        backgroundColor: theme.palette.grey[50]
    }));
    return (
        <Box sx={{backgroundColor: '#e9e9e9', minHeight: '100vh'}}>
            <Header></Header>
            <HomeIntroSection>
                <div>Hello</div>
            </HomeIntroSection>
        </Box>
    );
};

export default contact;
