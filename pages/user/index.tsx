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

  return <main>{userData && userData.nickname}</main>;
};

export default UserInfo;
