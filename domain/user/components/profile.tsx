import React from "react";
import type { NextPage } from "next";
import { Li, Title, Ul } from "./index.style";
import { getProfile } from "../api";
import { UserProfileType } from "../interface/index.type";

const Profile: NextPage = () => {
  const [userProfileData, setUserProfileData] =
    React.useState<UserProfileType>();

  React.useEffect(() => {
    getProfile().then((response) => {
      setUserProfileData(response.userData);
      console.log(response);
    });
  }, []);

  return (
    <main>
      <Title>👦 Profile</Title>
      {userProfileData ? (
        <Ul>
          <Li>{userProfileData.birthday}</Li>
          <Li>{userProfileData.school}</Li>
        </Ul>
      ) : (
        <></>
      )}
    </main>
  );
};
export default Profile;
