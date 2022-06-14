import {
    Typography,
    styled,
    Box,
    Button,
    Paper,
    TextField,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import { React, useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";

const ContactAboutMe = () => {

    const [mailText, setMailText] = useState("");
    const MyContactSection = styled("section")(({ theme }) => ({
        width: "90vw",
        margin: "0 auto",
        paddingTop: "4rem",
        // height: "100%",
        height: "800px",
        backgroundColor: "#dff8eb",
        boxShadow:
            "0px 17px 6px -3px rgba(0,0,0,0.2),0px 17px 14px 1px rgba(0,0,0,0.14),0px 17px 18px 3px rgba(0,0,0,0.12)", // 17px = y
        display: "flex",
        justifyContent: "space-evenly",
    }));
    return (
        <MyContactSection>
            <Box // Contact container
                sx={{
                    minWidth: "50%",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography // contact H3 text
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        color: "secondary.main",
                        fontWeight: "700",
                        fontSize: "2rem",
                    }}
                >
                    Contact
                </Typography>
                <Box sx={{ display: "flex", padding: "1rem" }}>
                    <Typography
                        sx={{ backgroundColor: "#e9e9e9", padding: "0.5rem" }}
                    >
                        tonymigeonpro@gmail.com
                    </Typography>
                    <Box sx={{ backgroundColor: "#e5e5e5", padding: "0.5rem" }}>
                        <BsClipboardPlus color="#4ee8e2" size={24} />
                    </Box>
                </Box>
                <Paper>
                    <TextField
                        id="outlined-basic"
                        label="Mail.."
                        onChange={(e) => setMailText(e.target.value)}
                        error={mailText.length <= 0}
                        helperText="Mail is invalid"
                    ></TextField>
                    <TextField
                        id="outlined-basic"
                        label="Subject"
                    ></TextField>
                    <TextField
                        id="outlined-basic"
                        label="Content.."
                    ></TextField>
                </Paper>
                <Box></Box>
            </Box>
            <Box // about me container
                sx={{
                    minWidth: "50%",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography // about me H3 text
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        color: "secondary.main",
                        fontWeight: "700",
                        fontSize: "2rem",
                    }}
                >
                    About Me
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        maxWidth: "70%",
                        textAlign: "center",
                        padding: "1rem",
                    }}
                >
                    Laboris adipisicing est irure sint exercitation labore
                    exercitation. Exercitation dolore in voluptate do elit eu
                    sint nisi amet irure. Dolor minim adipisicing esse minim
                    aliqua irure commodo ea nisi sint minim aliqua ullamco ea.
                </Typography>
            </Box>
        </MyContactSection>
    );
};

export default ContactAboutMe;
