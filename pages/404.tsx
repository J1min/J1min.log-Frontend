import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { NotFoundWrapper } from "../domain/notFound/components/index.style";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>잘못된 접근입니다</title>
      </Head>
      <section id={`404`}>
        <NotFoundWrapper />
      </section>
    </>
  );
};

export default NotFoundPage;
