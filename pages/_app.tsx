import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import HeaderContainer from "../domain/header/container/index";
import UserInfo from "../components/user/userInfo";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer />
      <UserInfo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
