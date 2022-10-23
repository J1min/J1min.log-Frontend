import React from "react";
import type { NextPage } from "next";
import { getUserInfo } from "../../api/user";
import { UserInfoType } from "../../interface/user";
import {
  UserContainer,
  UserInfoContainer,
  UserDescription,
  UserNickname,
} from "./index.style";
import UserProfile from "../../public/assets/image/user/profile.svg";
import Image from "next/image";

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
      <UserContainer>
        <Image
          src={UserProfile}
          alt={`프사입니다`}
          width={`192px`}
          height={`192px`}
          style={{
            borderRadius: "50%",
          }}
        />
        <UserInfoContainer>
          <UserNickname>{userData && userData.nickname}</UserNickname>
          <UserDescription>{userData && userData.description}</UserDescription>
        </UserInfoContainer>
      </UserContainer>
    </>
  );
};

export default UserInfo;
