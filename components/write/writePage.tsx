import React from "react";
import type { NextPage } from "next";
import * as S from "./editor.style";
import Editor from "./editor";
import Head from "next/head";

const WritePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>글쓰는 중</title>
      </Head>
      <main>
        <S.TitleInput />
        <Editor />
        <S.CompleteButton>작성 완료</S.CompleteButton>
      </main>
    </>
  );
};

export default WritePage;
