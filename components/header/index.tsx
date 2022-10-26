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
      <LogoContainer>
        <Link href={`/`}>
          <>
            <Image src={Logo} alt={`Logo`} />
            <Title>J1min.log</Title>
          </>
        </Link>
      </LogoContainer>
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
