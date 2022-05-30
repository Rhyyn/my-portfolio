import React from "react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import headerStyles from "../styles/Header.module.css";
import { BiWorld } from "react-icons/bi";
import { useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const LanguageSwitch = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const [currLocale, setCurrLocale] = useState(locale);

    const handleClick = (event) => {
        setCurrLocale(locale);
    };

    return (
        <React.Fragment>
            {currLocale === "fr" ? (
                <Link
                    activeClassName={locale === "en"}
                    href={asPath}
                    locale="en"
                >
                    <Typography
                        onClick={handleClick}
                        sx={{
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <BiWorld size={30} color="#104d2b" />
                        EN
                    </Typography>
                </Link>
            ) : (
                <Link
                    activeClassName={locale === "fr"}
                    href={asPath}
                    locale="fr"
                >
                    <Typography
                        onClick={handleClick}
                        sx={{
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        <BiWorld size={30} color="#104d2b" />
                        FR
                    </Typography>
                </Link>
            )}
        </React.Fragment>
    );
};

export default LanguageSwitch;

{
    /* <div className={headerStyles.localesContainer}>
{isLocaleFr ? (
  <Link activeClassName={locale === "en"} href={asPath} locale="en">
    <span
      onClick={handleClick}
      ref={refEn}
      className={headerStyles.LanguageSwitchText}
    >
      <BiWorld size={30} />
      EN
    </span>
  </Link>
) : (
  <Link activeClassName={locale === "fr"} href={asPath} locale="fr">
    <span
      onClick={handleClick}
      ref={refFr}
      className={headerStyles.LanguageSwitchText}
    >
    <BiWorld size={30} />
      FR
    </span>
  </Link>
)}
</div> */
}
