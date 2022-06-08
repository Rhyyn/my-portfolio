import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#45c14e",
            light: "#dff8eb",
            dark: "#4ee8e2",
            contrastText: "#fcfcfc",
        },
        secondary: {
            main: "#00324b",
            contrastText: "#002c43",
        },
        grey: {
            50: "#f0f0f0",
            100: "#e9e9e9",
        },
    },
    typography: {
        fontFamily: "Montserrat",
        fontWeightLight: "400",
        fontWeightRegular: "500",
        fontWeightMedium: "600",
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 550,
            laptop: 1024,
            desktop: 1200,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    "&:hover": {
                        backgroundColor: "#104d2b",
                        color: "#fff",
                    },
                }),
            },
        },
    },
});

export default theme;
