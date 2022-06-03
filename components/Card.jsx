import React from "react";
import Link from "next/link";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import { SiGithub } from "react-icons/si";

const MyCard = (props) => {
    return (
        <Card sx={{ maxWidth: "300px", margin: "1rem", textAlign: 'center', color: 'primary.main', maxHeight: "660px" }}>
            <CardHeader title={props.name} ></CardHeader>
            <CardMedia
                component="img"
                height="398px"
                image={props.image}
            ></CardMedia>
            <CardContent >
                <Typography variant="subtitle2">{props.desc}</Typography>
            </CardContent>
            
            <Link href={props.repo} >
                                <a target="_blank">
                                <SiGithub size={20} color='#cc2b84'/>
                                </a>
                            </Link>
            <CardActions>
                <Button size="small" sx={{color:"secondary.main"}} href={props.demo} target="_blank">Live Demo</Button>
                <Button size="small" sx={{color:"secondary.main"}}>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default MyCard;
