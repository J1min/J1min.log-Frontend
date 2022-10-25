import React from "react";
import type { NextPage } from "next";
import { CompleteButton, TitleInput } from "./editor.style";
import Editor from "./editor";
import { EditorContent } from "../../interface/write";
import useStore from "../../context/useStore";

const WritePage: NextPage = () => {
  const { content, setContent }: EditorContent = useStore();
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
