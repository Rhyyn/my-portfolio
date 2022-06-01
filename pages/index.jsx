import Head from "next/head";
import Header from "../components/Header";
import { Box } from "@mui/material";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import HomeProjects from "../components/HomeProjects";



export default function Home() {

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/projects");
    };

    return (
        <Box sx={{backgroundColor: '#e9e9e9', height: '100%'}}>
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
            {/* <Footer></Footer> */}
        </Box>
    );
}

{
    /* <section className={homeStyles.ProjectsSection}>
<main>

</main>
</section>
<section className="aboutContactSection">
<main></main>
</section> */
}
