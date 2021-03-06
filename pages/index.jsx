import Head from "next/head";
import Header from "../components/Header";
import { Box } from "@mui/material";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import HomeProjects from "../components/HomeProjects";
import ContactAboutMe from "../components/ContactAboutMe";



export default function Home() {


    return (
        <Box sx={{backgroundColor: '#e9e9e9', minHeight: '100vh'}}>
            <Head>
                <title>Tony Migeon Portfolio</title>
                <meta
                    name="Tony Migeon Web Dev Portfolio"
                    content="Portfolio of a React Developer created using NextJS / React / Material UI"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <HomeMain></HomeMain>
            <HomeProjects></HomeProjects>
            <ContactAboutMe></ContactAboutMe>
        </Box>
    );
}

