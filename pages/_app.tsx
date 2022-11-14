import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { UserStyle } from "../styles/userStyle";
import UserInfo from "../domain/user/components/userInfo";
import HeaderContainer from "../domain/header/container";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserStyle />
      <HeaderContainer />
      <UserInfo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;
