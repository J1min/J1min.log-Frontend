import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/user";
import { UserInfoType } from "../../interface/user";
import Head from "next/head";

const UserInfo: NextPage = () => {
  const [userData, setUserData] = React.useState<UserInfoType>();

  React.useEffect(() => {
    getUserInfo().then((response) => {
      setUserData(response.userData);
      console.log(response.userData);
    });
  }, []);

  return (
    <>
      <Head>
        <title>About J1min</title>
      </Head>
      <section id={`user`}>{userData && userData.nickname}</section>
    </>
  );
};

export default UserInfo;
