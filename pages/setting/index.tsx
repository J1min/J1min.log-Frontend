import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import SettingProvider from "../../domain/setting/Provider";

const SettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>세팅 페이지</title>
      </Head>
      <section id={`setting`}>
        <SettingProvider />
      </section>
    </>
  );
};

export default SettingPage;
