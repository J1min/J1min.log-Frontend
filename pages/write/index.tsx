import React from "react";
import type { NextPage } from "next";
import WritePage from "../../container/editorContainer";
import Head from "next/head";

const Write: NextPage = () => {
  return (
    <>
      <Head>
        <title>글쓰는 중</title>
      </Head>
      <section id={`write`}>
        <WritePage />
      </section>
    </>
  );
};

export default Write;
