import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/user";
import { UserInfoType } from "../../interface/user";
import UserProfile from "../../assets/user/profile.svg";
import Image from "next/image";
import {
  UserContainer,
  UserInfoContainer,
  UserDescription,
  UserNickname,
} from "./userInfo.style";

const UserInfo: NextPage = () => {
  const [userData, setUserData] = React.useState<UserInfoType>();

  React.useEffect(() => {
    getUserInfo().then((response) => {
      setUserData(response.userData);
    });
  }, []);

  return (
    <UserContainer>
      <Image
        src={UserProfile}
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
    </UserContainer>
  );
};

export default UserInfo;
