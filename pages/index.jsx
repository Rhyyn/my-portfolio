import Head from "next/head";
import Header from "../components/Header";
import { Box } from "@mui/material";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";



export default function Home() {

    const handleClick = (e) => {
        e.preventDefault();
        router.push("/projects");
    };

    return (
        <Box>
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
            <Footer></Footer>
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
