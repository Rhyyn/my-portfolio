import React from "react";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import headerStyles from "../styles/Header.module.css";
import { BiWorld } from "react-icons/bi";
import { useRef, useState } from "react";

const LanguageSwitch = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const [isLocaleFr, setIsLocaleFr] = useState(true);
  const refFr = useRef();
  const refEn = useRef();

  const handleClick = (event) => {
    setIsLocaleFr(!isLocaleFr);
  };

  return (
    <div className={headerStyles.localesContainer}>
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
    </div>
  );
};

export default LanguageSwitch;
