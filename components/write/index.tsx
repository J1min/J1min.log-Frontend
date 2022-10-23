import React from "react";
import type { NextPage } from "next";
import { CompleteButton, TitleInput } from "./editor.style";
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
        <TitleInput />
        <Editor content={content} setContent={setContent} />
        <CompleteButton>작성 완료</CompleteButton>
      </main>
    </>
  );
};

export default WritePage;
