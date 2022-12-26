import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HeaderWrapper, LogoWrapper, MenuWrapper, Menu } from "./index.style";
import Link from "next/link";
import { FullLogo } from "../assets";

const Header: NextPage = () => {
  return (
    <HeaderWrapper>
      <Link href={`/`}>
        <LogoWrapper>
          <Image src={FullLogo} alt={`Logo`} />
        </LogoWrapper>
      </Link>
      <MenuWrapper>
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
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
