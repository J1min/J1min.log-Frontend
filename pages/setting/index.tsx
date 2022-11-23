import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import SettingContainer from "../../domain/setting/container";

const SettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>세팅 페이지</title>
      </Head>
      <section id={`setting`}>
        <SettingContainer />
      </section>
    </>
  );
};

export default SettingPage;
