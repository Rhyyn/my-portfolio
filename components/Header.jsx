import React from "react";
import Image from "next/image";
import headerStyles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
import { BiMailSend } from "react-icons/bi";

const Header = () => {
    const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <Image className={headerStyles.logo} alt="logo.png" src="/logo.png" height={64} width={64}></Image>
        <button>
          <Link activeClassName={locale === "fr"} href={asPath} locale="fr">
            FR
          </Link>
        </button>
        <button>
          <Link activeClassName={locale === "en"} href={asPath} locale="en">
            EN
          </Link>
        </button>
        <span className={headerStyles.contactText}>
          Contact
          <BiMailSend className={headerStyles.contactLogo} size={25} />
        </span>
      </div>
    </header>
  );
};

export default Header;
