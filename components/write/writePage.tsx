import React from "react";
import type { NextPage } from "next";
import * as S from "../../styles/write/style";
import Editor from "./editor";

const WritePage: NextPage = () => {
  return (
    <main>
      <S.TitleInput />
      <Editor />
      <S.CompleteButton>작성 완료</S.CompleteButton>
    </main>
  );
};

export default WritePage;
