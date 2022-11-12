import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  UserProvider,
  UserInfoContainer,
  UserDescription,
  UserNickname,
} from "./userInfo.style";
import { UserInfoType } from "../interface";
import { getUserInfo } from "../api";
import { Profile } from "../assets";

const UserInfo: NextPage = () => {
  const [userData, setUserData] = React.useState<UserInfoType>();

  React.useEffect(() => {
    getUserInfo().then((response) => {
      setUserData(response.userData);
    });
  }, []);

  return (
    <UserProvider>
      <Image
        src={Profile}
        alt={`프사입니다`}
        width={`200px`}
        height={`200px`}
        style={{
          borderRadius: "50%",
        }}
      />
      <UserInfoContainer>
        <UserNickname>{userData && userData.nickname}</UserNickname>
        <UserDescription>{userData && userData.description}</UserDescription>
      </UserInfoContainer>
    </UserProvider>
  );
};

export default UserInfo;
