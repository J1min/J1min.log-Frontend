'use client'

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import WritePage from "../../domain/editor/container";

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
