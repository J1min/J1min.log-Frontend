import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/user";
import { UserInfoType } from "../../interface/user";

const UserInfo: NextPage = () => {
  const [userData, setUserData] = React.useState<UserInfoType>();

  React.useEffect(() => {
    getUserInfo().then((response) => {
      setUserData(response.userData);
    });
  }, []);

  return <section id={`user`}>{userData && userData.nickname}</section>;
};

export default UserInfo;
