import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../../public/assets/image/logo/logo_64.svg";
const Header: NextPage = () => {
  return (
    <header>
      <Image src={Logo} alt={`Logo`} />
    </header>
  );
};

export default Header;
