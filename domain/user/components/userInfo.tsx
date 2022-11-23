import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  UserWrapper,
  UserInfoWrapper,
  UserDescription,
  UserNickname,
} from "./userInfo.style";
import { UserInfoType } from "../interface/index.type";
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
    <UserWrapper>
      <Image
        src={Profile}
        alt={`프사입니다`}
        width={`200px`}
        height={`200px`}
        style={{
          borderRadius: "50%",
        }}
      />
      <UserInfoWrapper>
        <UserNickname>{userData && userData.nickname}</UserNickname>
        <UserDescription>{userData && userData.description}</UserDescription>
      </UserInfoWrapper>
    </UserWrapper>
  );
};

export default UserInfo;
