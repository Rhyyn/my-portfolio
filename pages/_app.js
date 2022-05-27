import "../styles/globals.css";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#105b34",
                light: "#6cd59b",
                dark: "#2bcc73",
                contrastText: "#fff",
            },
            secondary: {
                main: "#cc2b84",
                contrastText: "fff",
            },
            grey: {
                50: "f0f0f0",
                100: "e9e9e9",
            },
            typography: {
                fontFamily: "Montserrat",
                fontWeightLight: "400",
                fontWeightRegular: "500",
                fontWeightMedium: "600"
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
