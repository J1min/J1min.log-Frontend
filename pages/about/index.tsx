import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import UserInfo from "../../components/user";

const UserInfoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About J1min</title>
      </Head>
      <UserInfo />
    </>
  );
};

export default UserInfoPage;
