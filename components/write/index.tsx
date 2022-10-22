import React from "react";
import type { NextPage } from "next";
import * as S from "./editor.style";
import Editor from "./editor";
import Head from "next/head";
import Image from "next/image";
import { editorContent } from "../../interface/write";
import useStore from "../../context/useStore";

const WritePage: NextPage = () => {
  const { content, setContent }: editorContent = useStore();
  return (
    <>
      
      <main>
        <S.TitleInput />
        <Editor content={content} setContent={setContent} />
        <S.CompleteButton>작성 완료</S.CompleteButton>
      </main>
    </>
  );
};

export default WritePage;
