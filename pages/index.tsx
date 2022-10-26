import type { NextPage } from "next";
import Head from "next/head";
import Main from "../container/resumeContainer";

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
