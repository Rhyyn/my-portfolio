import React from "react";
import { useRouter } from "next/router";
import { AppBar, Stack, Toolbar, Box, Menu, Typography } from "@mui/material";
import { Container } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitch from "./LanguageSwitch";

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const NavbarContent = {
        en: {
            home: "Home",
            project: "Projects",
            aboutme: "About Me",
            contact: "Contact",
        },
        fr: {
            home: "Home",
            project: "Projets",
            aboutme: "Profil",
            contact: "Contact",
        },
    };
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const { home, project, aboutme, contact, content } = NavbarContent[locale];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            sx={{
                maxWidth: "90vw",
                backgroundColor: "#fff",
                height: "60px",
                position: "static",
            }}
        >
            <Container sx={{ width: "90vw", height: '60px' }}>
                <Toolbar disableGutters sx={{minHeight: '60px'}}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{ color: "primary.main" }}></MenuIcon>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {locale === "en"
                                ? Object.keys(NavbarContent.en).map(
                                      (item, index) => {
                                          return (
                                              <Typography
                                                  key={index}
                                                  variant="subtitle1"
                                                  sx={{
                                                      padding: "1rem",
                                                      cursor: "pointer",
                                                      color: "primary.main",
                                                  }}
                                              >
                                                  {NavbarContent.en[item]}
                                              </Typography>
                                          );
                                      }
                                  )
                                : Object.keys(NavbarContent.fr).map(
                                      (item, index) => {
                                          return (
                                              <Typography
                                                  key={index}
                                                  variant="subtitle1"
                                                  sx={{
                                                      padding: "1rem",
                                                      cursor: "pointer",
                                                      color: "primary.main",
                                                  }}
                                              >
                                                  {NavbarContent.fr[item]}
                                              </Typography>
                                          );
                                      }
                                  )}
                        </Menu>
                    </Box>
                    <LanguageSwitch></LanguageSwitch>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
