import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../../public/assets/image/logo/full_logo_main.svg";
import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  Menu,
} from "./index.style";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <HeaderContainer>
      <Link href={`/`}>
        <LogoContainer>
          <Image src={Logo} alt={`Logo`} />
        </LogoContainer>
      </Link>
      <MenuContainer>
        <Link href={`/`}>
          <Menu>소개</Menu>
        </Link>
        <Link href={`/board`}>
          <Menu>블로그</Menu>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
