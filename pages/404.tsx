import React from "react";
import type { NextPage } from "next";
import NotFound from "../components/notFound";
import Head from "next/head";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>이상한 접근입니다</title>
      </Head>
      <section id={`404`}>
        <NotFound />
      </section>
    </>
  );
};

export default NotFoundPage;
