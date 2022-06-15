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
import { useRouter } from "next/router";
import { BsBoxArrowUpRight } from "react-icons/bs";

const MyCard = (props) => {
    const Content = {
        en: {
            greeting: "Hello,", // h1
            title: props.project.englishName,
            desc: props.project.englishDescription,
            demo: "See Website",
            code: "See Code"
        },
        fr: {
            greeting: "Bonjour",
            title: props.project.frenchName,
            desc: props.project.frenchDescription,
            demo: "Voir le site",
            code: "Voir le Code"
        },
    };
    const router = useRouter();
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { greeting, title, desc, demo, code } = Content[locale];

    return (
        <Card
            sx={{
                maxWidth: "300px",
                margin: "1rem",
                textAlign: "center",
                color: "secondary.main",
                minHeight: "650px",
            }}
        >
            <CardHeader
                titleTypographyProps={{
                    fontSize: 18,
                }}
                sx={{ padding: "0.5rem" }}
                title={title}
            ></CardHeader>
            <CardMedia
                component="img"
                image={props.project.image}
                sx={{ maxHeight: "398px" }}
            ></CardMedia>
            <CardContent>
                <Typography variant="subtitle2" sx={{ minHeight: '90px'}}>{desc}</Typography>
            </CardContent>

            {/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Link href={props.project.repo}>
                    <a target="_blank">
                        <SiGithub color="#45c14e" size={20} />
                    </a>
                </Link>
                <Link href={props.project.repo}>
                    <a target="_blank">
                        <Typography variant="subtitle2">View Code</Typography>
                    </a>
                </Link>
            </Box> */}
            <CardActions
                sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <Button
                    sx={{
                        color: "primary.contrastText",
                        backgroundColor: "primary.main",
                        borderRadius: "15px",
                        width: "140px",
                        height: "35px",
                        fontSize: '0.8rem'
                    }}
                    href={props.project.demo}
                    target="_blank"
                    startIcon={<BsBoxArrowUpRight color="#fff" size={20} />}
                >
                    {demo}
                </Button>
                <Button
                    sx={{
                        color: "primary.contrastText",
                        backgroundColor: "primary.main",
                        borderRadius: "15px",
                        width: "140px",
                        height: "35px",
                        fontSize: '0.8rem'
                    }}
                    href={props.project.repo}
                    target="_blank"
                    endIcon={<SiGithub color="#fff" size={20} />}
                >
                    {code}
                    
                </Button>
            </CardActions>
        </Card>
    );
};

export default MyCard;
