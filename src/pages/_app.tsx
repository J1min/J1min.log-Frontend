import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/globalStyle';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
