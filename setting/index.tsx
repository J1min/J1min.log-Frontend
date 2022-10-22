import React from "react";
import type { NextPage } from "next";
import * as S from "./index.style";
import { postAllScriptData } from "../api/setting";

const Setting: NextPage = () => {
  const postAllScriptDataButton = () => {
    postAllScriptData()
      .then(() => {
        console.log("굿");
      })
      .catch((error) => {
        console.log("하자 발생");
      });
  };

  return (
    <main>
      <S.SettingButton onClick={postAllScriptDataButton}>
        명언 데이터 전체 추가
      </S.SettingButton>
      <S.SettingButton>유저 추가</S.SettingButton>
      <S.SettingButton>게시글 추가</S.SettingButton>
    </main>
  );
};

export default Setting;
