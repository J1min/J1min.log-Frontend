import React from "react";
import type { NextPage } from "next";
import * as S from "./index.style";
import { postBoard, postAllScriptData } from "../api/setting";

const Setting: NextPage = () => {
  const postAllScriptDataButton = () => {
    postAllScriptData()
  };

  const postAddBoard = () => {
    postBoard()
  };

  return (
    <main>
      <S.SettingButton onClick={postAllScriptDataButton}>
        명언 데이터 전체 추가
      </S.SettingButton>
      <S.SettingButton onClick={postAddBoard}>게시글 추가</S.SettingButton>
    </main>
  );
};

export default Setting;
