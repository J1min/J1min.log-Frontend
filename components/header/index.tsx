import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Logo from "../../public/assets/image/logo/logo_64.svg";
import {
  Title,
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
          <Title>J1min.log</Title>
        </LogoContainer>
      </Link>
      <MenuContainer>
        <Link href={`/about`}>
          <Menu>소개</Menu>
        </Link>
        <Link href={`blog`}>
          <Menu>블로그</Menu>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
