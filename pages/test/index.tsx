import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/test";
import Head from "next/head";

const Test: NextPage = () => {
  getUserInfo().then((response) => {
    console.log(response);
  });

  return (
    <>
      <Head>
        <title>테스트 페이지</title>
      </Head>
      <section id={`test`}>테스트중입니다</section>
    </>
  );
};

export default Test;
