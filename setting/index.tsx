import React from "react";
import type { NextPage } from "next";
import * as S from "./index.style";
import { postBoard, postAllScriptData } from "../api/setting";

const Setting: NextPage = () => {
  const { NEXT_PUBLIC_ADMIN_PASSWORD } = process.env;

  const postAllScriptDataButton = () => {
    if (prompt("비밀번호를 입력해주세요") === NEXT_PUBLIC_ADMIN_PASSWORD) {
      alert("확인되었습니다.");
      postAllScriptData();
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const postAddBoard = () => {
    if (prompt("비밀번호를 입력해주세요") === NEXT_PUBLIC_ADMIN_PASSWORD) {
      alert("확인되었습니다.");
      postBoard();
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
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
