import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const techBubble = (props) => {
    return (
            <Typography variant="subtitle2" sx={{backgroundColor: 'secondary.main', color: 'primary.contrastText', margin: '0.1rem', padding: '0.3rem', borderRadius: '12px', height: '32px' }}>{props.name}</Typography>
    );
};

export default techBubble;
