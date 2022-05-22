import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "../styles/Header.module.css";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.imageContainer}>
          <Link href="/">
            <Image
              className={headerStyles.logo}
              alt="logo.png"
              src="/logo.png"
              height={64}
              width={64}
            ></Image>
          </Link>
        </div>

        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
