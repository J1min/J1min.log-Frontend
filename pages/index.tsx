import type { NextPage } from "next";
import Main from "../domain/user/container";
import Head from "next/head";

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>J1min.log</title>
      </Head>
      <section id={`main`}>
        <Main />
      </section>
    </>
  );
};

export default MainPage;
