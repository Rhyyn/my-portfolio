import React from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
    const FooterComponent = styled("div")(({ theme }) => ({
    }));
    return (
        <FooterComponent>
            <Box sx={{height: '10px', width: '100vw', backgroundColor: 'primary.main', position: 'absolute', bottom: '0'}}></Box>
        </FooterComponent>
    );
};

export default Footer;
