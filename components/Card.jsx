import { React, useState } from "react";
import Link from "next/link";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Box,
} from "@mui/material";
import { SiGithub } from "react-icons/si";

const MyCard = (props) => {
    return (
        <Card
            sx={{
                maxWidth: "300px",
                margin: "1rem",
                textAlign: "center",
                color: "secondary.main",
                maxHeight: "660px",
            }}
        >
            <CardHeader
                titleTypographyProps={{
                    fontSize: 18,
                }}
                sx={{ padding: "0.5rem" }}
                title={props.name}
            ></CardHeader>
            <CardMedia
                component="img"
                maxHeight="398px"
                image={props.image}
            ></CardMedia>
            <CardContent>
                <Typography variant="subtitle2">{props.desc}</Typography>
            </CardContent>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Link href={props.repo}>
                    <a target="_blank">
                        <SiGithub color="#45c14e" size={20} />
                    </a>
                </Link>
                <Link href={props.repo}>
                    <a target="_blank">
                        <Typography variant="subtitle2">View Code</Typography>
                    </a>
                </Link>
            </Box>
            <CardActions
                sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <Button
                    size="small"
                    sx={{
                        color: "primary.contrastText",
                        backgroundColor: "primary.main",
                        borderRadius: "15px",
                        width: "120px",
                    }}
                    href={props.demo}
                    target="_blank"
                >
                    Live Demo
                </Button>
                <Button
                    size="small"
                    sx={{
                        color: "primary.contrastText",
                        backgroundColor: "primary.main",
                        borderRadius: "15px",
                        width: "120px",
                    }}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default MyCard;
