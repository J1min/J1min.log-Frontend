import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import NotFoundContainer from "../domain/notFound/container";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>잘못된 접근입니다</title>
      </Head>
      <section id={`404`}>
        <NotFoundContainer />
      </section>
    </>
  );
};

export default NotFoundPage;
