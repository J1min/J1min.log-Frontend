import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import {
  HeaderProvider,
  LogoProvider,
  MenuProvider,
  Menu,
} from "./index.style";
import Link from "next/link";
import { FullLogo } from "../assets";

const Header: NextPage = () => {
  return (
    <HeaderProvider>
      <Link href={`/`}>
        <LogoProvider>
          <Image src={FullLogo} alt={`Logo`} />
        </LogoProvider>
      </Link>
      <MenuProvider>
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
      </MenuProvider>
    </HeaderProvider>
  );
};

export default Header;
