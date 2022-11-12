import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { getTodaysDate } from "../../util";

const Test: NextPage = () => {
  console.log(getTodaysDate());

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
