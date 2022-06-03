import React from "react";
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
        <Card sx={{ maxWidth: "300px", margin: "1rem", textAlign: 'center', color: 'primary.main' }}>
            <CardHeader title={props.name} ></CardHeader>
            <CardMedia
                component="img"
                height="100%"
                image={props.image}
            ></CardMedia>
            <CardContent >
                <Typography variant="subtitle2">{props.desc}</Typography>
            </CardContent>
            <SiGithub size={20} />
            <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default MyCard;
