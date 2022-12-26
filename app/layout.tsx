"use client";

import localFont from "@next/font/local";
import Header from "../domain/header/components";
import { GlobalStyle } from "../styles/globalStyle";
import { UserStyle } from "../styles/userStyle";

import Head from "./head";
const font = localFont({ src: "../styles/font/PretendardVariable.ttf" });

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <UserStyle />
      <html className={font.className}>
        <Head />
        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;
