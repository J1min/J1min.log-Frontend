"use client";

import localFont from "@next/font/local";
import { GlobalStyle } from "../styles/globalStyle";
import Head from "./head";
const font = localFont({ src: "../styles/font/PretendardVariable.ttf" });

const Layout = ({ children }: any) => {
  return (
    <>
      <GlobalStyle />
      <html className={font.className}>
        <Head />
        <body>{children}</body>
      </html>
    </>
  );
};

export default Layout;
