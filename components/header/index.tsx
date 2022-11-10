import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { FullLogo } from "../../assets";
import { FaGithub } from "react-icons/fa";
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
          <Image src={FullLogo} alt={`Logo`} />
        </LogoContainer>
      </Link>
      <MenuContainer>
        <Link href={`/`}>
          <Menu>소개</Menu>
        </Link>
        <Link href={`/board`}>
          <Menu>블로그</Menu>
        </Link>
        <Link href={`https://github.com/J1min`}>
          <Menu>
            <FaGithub />
          </Menu>
        </Link>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
