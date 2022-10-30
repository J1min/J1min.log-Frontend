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
      <LogoContainer>
        <Link href={`/`}>
          <>
            <Image src={Logo} alt={`Logo`} />
          </>
        </Link>
      </LogoContainer>
      <MenuContainer>
        <Link href={`/board`}>
          <Menu>블로그</Menu>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
