import React from "react";
import type { NextPage } from "next";
import Setting from "../../container/settingContainer";
import Head from "next/head";

const SettingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>세팅 페이지</title>
      </Head>
      <section id={`setting`}>
        <Setting />
      </section>
    </>
  );
};

export default SettingPage;
